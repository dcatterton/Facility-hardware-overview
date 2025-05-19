document.addEventListener('DOMContentLoaded', function() {
    // Get references to table elements
    const deviceTable = document.getElementById('device-table');
    const paginator = document.getElementById('device-table-paginator');
    const deviceCountElement = document.querySelector('.device-count');
    const emptyState = document.querySelector('.device-empty-state');
    const noResultsState = document.querySelector('.device-no-results-state');
    const tableFooter = document.querySelector('.table-footer');

    // Initialize table directly without waiting for external events
    initializeTableData();

    function initializeTableData() {
        // Make sure allDeviceData is available - if not already loaded from script.js, create it
        if (!window.allDeviceData && window.facilities) {
            generateSampleData();
        }

        // Configure the table
        deviceTable.allowRowClick = true;
        deviceTable.select = true;
        deviceTable.multiselect = true;
        deviceTable.selectKey = 'kioskId';

        // Add expand icon column at the end
        deviceTable.columnConfigurations = [
            { header: 'Kiosk ID', property: 'kioskId', sortable: true },
            { header: 'Facility', property: 'facility', sortable: true, initialSort: true },
            { header: 'Device type', property: 'deviceType', sortable: true },
            { header: 'Hardware type', property: 'hardwareType', sortable: true },
            { header: 'Device name', property: 'deviceName', sortable: true },
            { header: 'Status', property: 'status', sortable: true },
            {
                align: 'center',
                header: '',
                template: getExpandRowColumnTemplate,
                cellStyle: { width: '48px' }
            }
        ];

        // Sort the data to put Error status first, then by facility name
        if (window.allDeviceData) {
            window.allDeviceData.sort((a, b) => {
                // First sort by status - Error rows first
                if (a.status === 'Error' && b.status !== 'Error') {
                    return -1;
                }
                if (a.status !== 'Error' && b.status === 'Error') {
                    return 1;
                }
                
                // Then sort by facility name
                return a.facility.localeCompare(b.facility);
            });

            // Set the paginator total and reset to first page
            paginator.total = window.allDeviceData.length;
            paginator.pageIndex = 0;

            // Update the page
            updateTablePage(paginator.pageIndex, paginator.pageSize);

            // Update device count
            if (deviceCountElement) {
                deviceCountElement.textContent = `${window.allDeviceData.length} device${window.allDeviceData.length === 1 ? '' : 's'} found`;
            }
        }

        // Make sure empty state is hidden and table is shown
        if (emptyState) emptyState.style.display = 'none';
        if (noResultsState) noResultsState.style.display = 'none';
        if (deviceTable) deviceTable.style.display = '';
        if (tableFooter) tableFooter.style.display = '';

        // Listen for paginator changes
        if (paginator) {
            paginator.addEventListener('forge-paginator-change', (event) => {
                const { pageIndex, pageSize } = event.detail;
                updateTablePage(pageIndex, pageSize);
            });
        }

        // Also apply badges on sort
        deviceTable.addEventListener('forge-table-sort', () => {
            setTimeout(applyStatusBadges, 50);
        });

        // Row click for navigation (ignore clicks on expand icon)
        deviceTable.addEventListener('forge-table-row-click', (event) => {
            if (event.detail.originalEvent?.target?.closest('forge-icon-button')) return;
            const rowData = event.detail.data;
            if (!rowData) return;
            const queryParams = new URLSearchParams(Object.entries(rowData));
            window.location.href = `index2.html?${queryParams.toString()}`;
        });

        // Add event listener for row selection
        deviceTable.addEventListener('forge-table-select', (event) => {
            const selectedRows = deviceTable.getSelectedRows();
            console.log('Selected rows:', selectedRows);
            updateActionButtonsVisibility();
        });

        // Initialize action buttons visibility
        updateActionButtonsVisibility();
    }

    function updateTablePage(pageIndex, pageSize) {
        if (!window.allDeviceData) return;
        
        const startIdx = pageIndex * pageSize;
        const endIdx = startIdx + pageSize;
        deviceTable.data = window.allDeviceData.slice(startIdx, endIdx);
        
        // Apply badges after table data is updated
        setTimeout(applyStatusBadges, 50);
    }

    function applyStatusBadges() {
        // Get all rows in the table
        const rows = Array.from(deviceTable.querySelectorAll('tbody tr'));
        
        // Loop through each row
        rows.forEach(row => {
            // Status is in the 6th column (index 5)
            // But with select checkbox enabled, we need to add 1 to the index
            const statusCell = row.cells[6]; // Adjust for checkbox column
            
            if (statusCell && statusCell.textContent) {
                const status = statusCell.textContent.trim();
                
                // Set row background color based on status
                if (status === 'Error') {
                    row.style.backgroundColor = 'var(--forge-theme-error-container-minimum)';
                    // Reset text color for all cells in error rows
                    Array.from(row.cells).forEach(cell => {
                        cell.style.color = '';
                    });
                } else if (status === 'Offline') {
                    row.style.backgroundColor = 'var(--forge-theme-surface-dim)';
                    // Apply text color to all cells in offline rows
                    Array.from(row.cells).forEach(cell => {
                        cell.style.color = 'var(--forge-theme-text-medium)';
                    });
                } else {
                    row.style.backgroundColor = ''; // Reset to default for other statuses
                    // Reset text color for all cells in other rows
                    Array.from(row.cells).forEach(cell => {
                        cell.style.color = '';
                    });
                }
                
                const themeMap = {
                    'Online': 'success',
                    'Error': 'error',
                    'Maintenance': 'warning',
                    'Offline': 'info-secondary'
                };
                statusCell.innerHTML = `<forge-badge theme="${themeMap[status] || 'default'}" >${status}</forge-badge>`;
            }
        });
    }

    function updateActionButtonsVisibility() {
        const actionButtons = document.querySelector('.device-action-buttons');
        if (!actionButtons) return;
        
        const selectedRows = deviceTable.getSelectedRows ? deviceTable.getSelectedRows() : [];
        if (selectedRows && selectedRows.length > 0) {
            actionButtons.style.display = '';
        } else {
            actionButtons.style.display = 'none';
        }
    }

    function getExpandRowColumnTemplate(rowIndex) {
        const iconButton = document.createElement('forge-icon-button');
        iconButton.tabIndex = -1;
        const button = document.createElement('button');
        button.type = 'button';
        button.style.background = 'none';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        const icon = document.createElement('forge-icon');
        icon.name = 'keyboard_arrow_down';
        icon.external = true;
        button.appendChild(icon);
        button.addEventListener('click', evt => {
            evt.stopPropagation();
            if (deviceTable.isRowExpanded(rowIndex)) {
                deviceTable.collapseRow(rowIndex);
                icon.name = 'keyboard_arrow_down';
            } else {
                deviceTable.expandRow(rowIndex, buildRowTemplate(rowIndex));
                icon.name = 'keyboard_arrow_up';
            }
        });
        iconButton.appendChild(button);
        return iconButton;
    }

    function buildRowTemplate(rowIndex) {
        // You can use your own HTML here, or clone a template
        return `
            <div class="forge-table-expandable-row">
            <forge-card outlined>
                <h2 class="forge-typography--heading2 inner-title">Device Details</h2>
                <div class="card-inner">
                <forge-label-value>
                    <span slot="label">Last Online</span>
                    <span slot="value">${new Date().toLocaleString()}</span>
                </forge-label-value>
                <forge-label-value>
                    <span slot="label">Software Version</span>
                    <span slot="value">v2.1.4</span>
                </forge-label-value>
                <forge-label-value>
                    <span slot="label">IP Address</span>
                    <span slot="value">192.168.1.1</span>
                </forge-label-value>
                </div>
            </forge-card>
            </div>
        `;
    }

    // Generate sample data if needed
    function generateSampleData() {
        // Helper to get a random item from an array
        function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

        // Sample value pools
        const kioskIds = Array.from({length: 50}, (_, i) => (23000 + i).toString());
        const deviceTypes = ['Lobby', 'Booking', 'Cart', 'Inmate', 'Video Visit - Remote', 'Charging Station', 'Vending Machine'];
        const hardwareTypes = ['', 'Windows Kiosk', 'Windows Tablet', 'Android'];
        const statusValues = ['Online', 'Error', 'Maintenance', 'Offline'];
        const deviceNames = [
          'DBOVS-AAGFV', 'DBOVS-AAGGK', 'DBOVS-AAGGQ', 'DBOVS-AAGHF', 'DBOVS-AAGHN', 'DBOVS-AAGIH', 'DBOVS-AAGJK',
          'DBOVS-AAGJX', 'DBOVS-AAGKL', 'DBOVS-AAGKS', '707 MIDDLE LEFT', '618 Middle', '506 Left', 'Visitation 6'
        ];

        // Get facilities from the imported data
        // Updated facilityNames array with all facilities
const facilityNames = window.facilities ? window.facilities.map(f => f.label) : [
    'Acadia Parish Jail, LA',
    'Adams County, MS',
    'Allen County, KY',
    'Angelina County, TX',
    'Ascension Parish, LA',
    'Assumption Parish, LA',
    'Atascosa County, TX',
    'Atchison County Sheriffs Office, KS',
    'ATEF, AL 1178',
    'Autauga County, AL 8128',
    'Avoyelles Parish Cottonport Jail, LA',
    'Avoyelles Parish Main Jail, LA',
    'Baca County Jail, CO',
    'Bacon County, GA',
    'Bahamas, BA',
    'Bailey County, TX',
    'Barren County, KY',
    'Bell County, KY',
    'Bergen County Jail, NJ',
    'Blount County, AL',
    'Bluebonnet Detention Center, TX',
    'Bosque County, TX',
    'Bourbon County, KY',
    'Boyd County, KY',
    'Boyle County, KY',
    'Brewster County, TX',
    'Butler County, AL 3321',
    'Butler County, KY - Inmate Trust',
    'Calcasieu Parish, LA',
    'Caldwell County, TX',
    'Calloway County, KY',
    'Cameron County, TX',
    'Carter County, KY',
    'Casey County, KY NEW',
    'Cass County Sheriffs Office, IN',
    'Cedar County, MO',
    'Central Valley Annex, CA',
    'Chambers County Detention Center, AL',
    'Chambers County Jail, TX',
    'Chase County, KS',
    'Chaves County, NM',
    'Childress County, TX',
    'Claiborne County, TN',
    'Clark County, IN',
    'Clark County, KY',
    'Clarke County, AL 8156',
    'Clatsop County Sheriff\'s Office, OR',
    'Clayton County, GA',
    'Cobb County Office - Fingerprint',
    'Cobb County Office - One, GA',
    'Cobb County Special - Two, GA',
    'Coffee County, TN',
    'Coleman County Jail, TX',
    'Conecuh County, AL 8126',
    'Coosa County, AL',
    'Creek County, OK',
    'Crenshaw County, AL 3860',
    'Curry County Detention Center, NM',
    'Curry County Jail - O/I, OR',
    'Dale County, AL',
    'Danville Juvenile Detention Center, VA',
    'Davidson County, TN (CDF/MCC) - Resource Project',
    'Davidson County, TN (CDM/DDC) - Resource Project',
    'Daviess County Detention Center, KY',
    'Deaf Smith County, TX',
    'Decatur County, KS',
    'Denton County Jail, TX',
    'Dismas Charities, KY',
    'Dunn County Jail, WI',
    'East Hidalgo Detention Center, TX',
    'El Dorado, CA',
    'Ellis County, KS',
    'Elmore County, AL 5736',
    'ENSENADA',
    'Esmeralda County, NV',
    'EVDF, TX',
    'Fayette County, TN',
    'Ford County, KS',
    'Freestone County Jail, TX',
    'Fremont County Jail, CO',
    'Gadsden Correctional Facility FL',
    'Gilpin County Jail, CO',
    'Golden State Annex, CA',
    'Graham County, KS',
    'Grant County - Sheridan City Detention, AR',
    'Grant County, KS',
    'Grant County, KY',
    'Grant Parish, LA',
    'Gray County, TX',
    'Greene County, AL 8127',
    'Greenup County, KY',
    'Greenwood County, KS',
    'Hamilton County, KS',
    'Hardin County, KY',
    'Harlan County, KY',
    'Harper County, KS',
    'Harrison County Detention Center, MS',
    'Harrison County, IN - NEW 2022',
    'Hart County Jail, KY',
    'Haskell County, KS',
    'Henderson, KY',
    'Henry County, AL',
    'Holmes County, FL',
    'Hopkins County, TX',
    'Houston County Detention Center, GA',
    'Humboldt County, CA',
    'Iberia Parish, LA',
    'Iberville Parish, LA',
    'Jackson County Detention Center, KY',
    'Jackson County, MS',
    'Jasper County Detention Center, SC',
    'Jefferson County, AL',
    'Jenkins County, GA',
    'Jessamine County, KY',
    'Johnson County Adult Detention Center, KS',
    'Jones County Adult Detention Center, MS',
    'Kendall County, TX',
    'Kentucky River Regional Jail, KY',
    'Kerr County, TX',
    'Kingman County, KS',
    'Kings County (Juvenile), CA',
    'Kings County Jail (Adult), CA',
    'Kintock Group - Bridgeton, NJ',
    'Kintock Group - Newark, NJ',
    'Kintock Group - Philadelphia, PA',
    'Kiowa County, KS',
    'Knox County, KY',
    'Knox County, TN',
    'Lake County, TN',
    'Lamar County, TX',
    'Lamb County, TX',
    'Larimer County, CO',
    'Larue County, KY',
    'LaSalle County Regional Detention Center, TX',
    'LaSalle County, TX',
    'Latimer County, OK',
    'Lauderdale County, MS',
    'Laurel County, KY',
    'Lawrence County, TN',
    'Lee County, AL',
    'Leslie County, KY',
    'Letcher County, KY',
    'Lewis and Clark County Jail, MT',
    'Lincoln County Jail, TN',
    'Live Oak County, TX',
    'Logan County, KY - Inmate Trust',
    'Lowndes County, AL 8215',
    'Lynn County, TX',
    'Lyon County, KS',
    'Macon County, AL',
    'Madison County Criminal Justice Complex, TN',
    'Madison County, AL',
    'Marion County, AL',
    'Marion County, AR',
    'Marion County, OR',
    'Marshall County, KS',
    'Maury County, TN',
    'McCulloch County Jail, TX',
    'Meade County, KY',
    'Medina County Jail, TX',
    'Mills County, TX',
    'Missoula County, MT',
    'Monroe County, AR',
    'Montgomery City, AL 2414',
    'Montgomery County, KS',
    'Montgomery County, KY',
    'Montgomery County, TN',
    'Montrose County, CO',
    'Moore County Detention Center, NC',
    'Morgan County, AL - NEW 1/30/2023',
    'Morgan County, IN',
    'Muscle Shoals, AL',
    'Nelson County, KY',
    'Newton County Jail, MS',
    'Nolan County, TX',
    'Oldham County, KY',
    'Oriana House - The McDonnell Center, OH',
    'Pawnee County, KS',
    'Pike County, AL 4347',
    'Pike County, KY',
    'Pittsburg County, OK',
    'Plaquemines Parish, LA',
    'Powell County, KY',
    'Prairie County, AR',
    'Pushmataha County, OK',
    'Putnam County, TN',
    'Rains County Jail, TX',
    'Randolph County, IL',
    'Rapides Parish Detention Center 1, LA',
    'Rapides Parish Detention Center 3, LA',
    'Red Willow County Jail, NE',
    'Republic County Jail, KS',
    'Rockcastle, KY',
    'Rooks County, KS',
    'Rowan County, KY',
    'Rutherford County, TN - ICS',
    'Rutherford Work Center, TN - ICS',
    'San Jacinto County, TX',
    'Scott County Detention Center, KY',
    'Seminole County, OK',
    'Sevier County, UT',
    'Shackelford County, TX',
    'Sheridan County Sheriff, WY',
    'Simpson County, KY - Inmate Account NEW',
    'Somervell County, TX',
    'South Louisiana Detention Facility, LA',
    'St. Charles Parish, LA',
    'St. James Parish, LA',
    'St. Landry Parish, LA',
    'St. Martin Parish Corrections 1 - Main Jail, LA',
    'Sullivan County Jail, IN',
    'Sullivan County, TN (Community Readiness)',
    'Sumner County Detention Center, KS',
    'Terrebonne Parish, LA',
    'Test Facility - Dane County, WI',
    'Thomas County Jail, KS',
    'Thurston County, NE',
    'Tillamook County, OR',
    'Tohono Oodham Nation, AZ',
    'Trego County, KS',
    'Upshur County, TX',
    'Upton County Jail, TX',
    'Valley County Sheriffs Office, MT',
    'Vanderburgh County, IN',
    'Vigo County Jail, IN',
    'Wasatch County Sheriff\'s Office, UT',
    'Washington County, AL 2202',
    'Wayne County Detention Center, MS',
    'Wayne County, KY- New',
    'Weakley County Detention Center, TN',
    'West Baton Rouge Parish, LA',
    'Wharton County, TX',
    'Whitley County, IN',
    'Williamson County, TN',
    'Winston County, AL 8765',
    'Woodford County, KY',
    'Yamhill County Jail, OR',
    'Zapata County, TX',
    'Zavala County Jail, TX'
];

        // Generate data
        window.allDeviceData = Array.from({length: 30}, () => {
          // Generate status with specific distribution:
          // 80% Online, 10% Error, 5% Offline, 5% Maintenance
          let status;
          const statusRandom = Math.random() * 100;
          if (statusRandom < 80) {
            status = 'Online';
          } else if (statusRandom < 90) {
            status = 'Error';
          } else if (statusRandom < 95) {
            status = 'Offline';
          } else {
            status = 'Maintenance';
          }

          return {
            kioskId: rand(kioskIds),
            deviceType: rand(deviceTypes),
            hardwareType: rand(hardwareTypes),
            deviceName: rand(deviceNames),
            facility: rand(facilityNames),
            status: status
          };
        });
    }
});