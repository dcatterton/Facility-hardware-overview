// Enhanced search and filtering implementation
document.addEventListener('DOMContentLoaded', function() {
    // Get references to all search form elements
    const searchForm = document.querySelector('.find-devices-form form');
    const facilityAutocomplete = document.querySelector('.facility-autocomplete');
    const deviceTypeAutocomplete = document.querySelector('.device-type-autocomplete');
    const kioskIdField = document.querySelector('.find-devices-form forge-text-field input[placeholder="Search for kiosk ID"]');
    const deviceNameField = document.querySelector('.find-devices-form forge-text-field input[placeholder="Search for device name"]');
    
    // Advanced search fields
    const locationField = document.querySelector('.advanced-search-container forge-text-field input');
    const allowedLocationsField = document.querySelector('.advanced-search-container forge-chip-field input');
    const lastCheckInSelect = document.querySelector('.advanced-search-container forge-select[label="Sort by last check-in"]');
    const statusSelect = document.querySelector('.advanced-search-container forge-select[label="Sort by status"]');
    
    // Table and display elements
    const deviceTable = document.getElementById('device-table');
    const paginator = document.getElementById('device-table-paginator');
    const emptyState = document.querySelector('.device-empty-state');
    const noResultsState = document.querySelector('.device-no-results-state');
    const tableFooter = document.querySelector('.table-footer');
    const deviceCountElement = document.querySelector('.device-count');
    
    // Filter drawer elements
    const filterDrawer = document.getElementById('filter-drawer');
    const drawerFacilityAutocomplete = document.querySelector('#filter-drawer .facility-autocomplete');
    const filtersAppliedLabel = document.querySelector('.filters-applied-label');
    const resetFiltersButton = document.querySelector('.reset-filters-button');
    const applyFiltersButton = document.querySelector('.apply-filters-button');
    const clearFilterButton = document.querySelector('.clear-filter-button');
    
    // Ensure we have the allDeviceData array
    if (!window.allDeviceData) {
        console.error("Device data is not available");
        return;
    }
    
    // Function to apply filters and update the table
    function applyFilters() {
        // Get all filter values (main search form)
        let facilityValue = '';
        if (facilityAutocomplete && facilityAutocomplete.value && facilityAutocomplete.value.label) {
            facilityValue = facilityAutocomplete.value.label.trim().toLowerCase();
        } else if (facilityAutocomplete) {
            facilityValue = facilityAutocomplete.querySelector('input')?.value.trim().toLowerCase() || '';
        }
        
        let deviceTypeValue = '';
        if (deviceTypeAutocomplete && deviceTypeAutocomplete.value && deviceTypeAutocomplete.value.label) {
            deviceTypeValue = deviceTypeAutocomplete.value.label.trim().toLowerCase();
        } else if (deviceTypeAutocomplete) {
            deviceTypeValue = deviceTypeAutocomplete.querySelector('input')?.value.trim().toLowerCase() || '';
        }
        
        const kioskIdValue = kioskIdField?.value.trim().toLowerCase() || '';
        const deviceNameValue = deviceNameField?.value.trim().toLowerCase() || '';
        
        // Advanced search values
        const locationValue = locationField?.value.trim().toLowerCase() || '';
        const allowedLocationsValue = allowedLocationsField?.value.trim().toLowerCase() || '';
        const lastCheckInValue = lastCheckInSelect?.value || '';
        const statusValue = statusSelect?.value || '';
        
        // Filter the device data
        let filtered = window.allDeviceData.filter(device => {
            // Main search form filters
            if (facilityValue && !device.facility.toLowerCase().includes(facilityValue)) return false;
            if (deviceTypeValue && !device.deviceType.toLowerCase().includes(deviceTypeValue)) return false;
            if (kioskIdValue && !device.kioskId.toLowerCase().includes(kioskIdValue)) return false;
            if (deviceNameValue && !device.deviceName.toLowerCase().includes(deviceNameValue)) return false;
            
            // Advanced search filters
            // Note: These would need to be adjusted based on actual device data properties
            // For demonstration, using hypothetical properties
            if (locationValue && device.location && !device.location.toLowerCase().includes(locationValue)) return false;
            if (allowedLocationsValue && device.allowedLocations && !device.allowedLocations.toLowerCase().includes(allowedLocationsValue)) return false;
            
            // Status filter from advanced search
            if (statusValue) {
                const statusMap = {'1': 'Error', '2': 'Maintenance', '3': 'Offline', '4': 'Online'};
                if (device.status !== statusMap[statusValue]) return false;
            }
            
            return true;
        });
        
        // Apply sorting for last check-in if selected
        if (lastCheckInValue) {
            // Sort by a hypothetical lastCheckIn property
            // Note: This would need to be adjusted based on actual device data
            filtered.sort((a, b) => {
                const dateA = a.lastCheckIn ? new Date(a.lastCheckIn) : new Date(0);
                const dateB = b.lastCheckIn ? new Date(b.lastCheckIn) : new Date(0);
                return lastCheckInValue === '1' ? dateA - dateB : dateB - dateA;
            });
        }
        
        // Update device count
        if (deviceCountElement) {
            deviceCountElement.textContent = `${filtered.length} device${filtered.length === 1 ? '' : 's'} found`;
        }
        
        // Show/hide table, paginator, and empty states
        if (filtered.length > 0) {
            deviceTable.style.display = '';
            tableFooter.style.display = '';
            emptyState.style.display = 'none';
            noResultsState.style.display = 'none';
            
            // Update paginator and table
            paginator.total = filtered.length;
            paginator.pageIndex = 0;
            deviceTable.data = filtered.slice(0, paginator.pageSize);
            
            // Apply status badges to make them visually distinct
            setTimeout(applyStatusBadges, 50);
        } else {
            deviceTable.style.display = 'none';
            tableFooter.style.display = 'none';
            emptyState.style.display = 'none';
            noResultsState.style.display = '';
        }
    }
    
    // Apply status badges to rows for visual distinction
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
                
                // Add status badges with appropriate colors
                const themeMap = {
                    'Online': 'success',
                    'Error': 'error',
                    'Maintenance': 'warning',
                    'Offline': 'info-secondary'
                };
                statusCell.innerHTML = `<forge-badge theme="${themeMap[status] || 'default'}">${status}</forge-badge>`;
            }
        });
    }
    
    // Handle search form submission
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        applyFilters();
    });
    
    // Initialize device type autocomplete
    if (deviceTypeAutocomplete) {
        const deviceTypeOptions = [
            { label: 'Lobby', value: 'Lobby' },
            { label: 'Booking', value: 'Booking' },
            { label: 'Cart', value: 'Cart' },
            { label: 'Inmate', value: 'Inmate' },
            { label: 'Video Visit - Remote', value: 'Video Visit - Remote' },
            { label: 'Charging Station', value: 'Charging Station' },
            { label: 'Vending Machine', value: 'Vending Machine' }
        ];
        
        deviceTypeAutocomplete.filter = (text, value) => {
            if (!text) return deviceTypeOptions;
            return deviceTypeOptions.filter(opt => 
                opt.label.toLowerCase().includes(text.toLowerCase())
            );
        };
    }
    
    // Initialize both facility autocompletes (main form and drawer)
    [facilityAutocomplete, drawerFacilityAutocomplete].forEach(autocomplete => {
        if (autocomplete) {
            autocomplete.filter = (text, value) => {
                if (!text) return facilities;
                return facilities.filter(facility => 
                    facility.label.toLowerCase().includes(text.toLowerCase())
                );
            };
        }
    });
    
    // Sync facility filter between main form and drawer
    function syncFacilityFilter() {
        if (facilityAutocomplete && drawerFacilityAutocomplete) {
            // If selecting from drawer, update main form
            if (drawerFacilityAutocomplete.value) {
                facilityAutocomplete.value = drawerFacilityAutocomplete.value;
            }
            // Update filters count in drawer
            updateFiltersCount();
        }
    }
    
    // Update filters count in drawer
    function updateFiltersCount() {
        const activeFilters = drawerFacilityAutocomplete && drawerFacilityAutocomplete.value ? 1 : 0;
        if (filtersAppliedLabel) {
            filtersAppliedLabel.textContent = `${activeFilters} filter${activeFilters !== 1 ? 's' : ''} applied`;
        }
    }
    
    // Handle facility selection in drawer
    if (drawerFacilityAutocomplete) {
        drawerFacilityAutocomplete.addEventListener('forge-autocomplete-change', syncFacilityFilter);
    }
    
    // Handle clear filter button in drawer
    if (clearFilterButton) {
        clearFilterButton.addEventListener('click', (event) => {
            event.stopPropagation();
            if (drawerFacilityAutocomplete) {
                drawerFacilityAutocomplete.value = null;
                const input = drawerFacilityAutocomplete.querySelector('input');
                if (input) {
                    input.value = '';
                }
            }
            updateFiltersCount();
        });
    }
    
    // Handle reset filters button in drawer
    if (resetFiltersButton) {
        resetFiltersButton.addEventListener('click', () => {
            if (drawerFacilityAutocomplete) {
                drawerFacilityAutocomplete.value = null;
            }
            updateFiltersCount();
        });
    }
    
    // Handle apply filters button in drawer
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', () => {
            syncFacilityFilter();
            applyFilters();
            
            // Close the drawer after applying filters
            if (filterDrawer) {
                filterDrawer.open = false;
            }
        });
    }
    
    // Handle filter drawer open/close
    const filterButton = document.getElementById('filter-devices-button');
    const closeFilterButton = document.getElementById('close-filter-drawer');
    
    if (filterButton && filterDrawer) {
        filterButton.addEventListener('click', () => {
            filterDrawer.open = true;
        });
    }
    
    if (closeFilterButton && filterDrawer) {
        closeFilterButton.addEventListener('click', () => {
            filterDrawer.open = false;
        });
    }
    
    // Enhance paginator functionality
    if (paginator) {
        paginator.addEventListener('forge-paginator-change', (event) => {
            const { pageIndex, pageSize } = event.detail;
            
            // Filter the data again and get the current page
            const filtered = window.allDeviceData.filter(device => {
                // Apply all the same filters as in applyFilters()
                // This is a simplified version - you would need to duplicate all the filter logic here
                let keep = true;
                
                // Main search form filters
                if (facilityAutocomplete && facilityAutocomplete.value && facilityAutocomplete.value.label) {
                    if (!device.facility.toLowerCase().includes(facilityAutocomplete.value.label.toLowerCase())) {
                        keep = false;
                    }
                }
                
                if (keep && deviceTypeAutocomplete && deviceTypeAutocomplete.value && deviceTypeAutocomplete.value.label) {
                    if (!device.deviceType.toLowerCase().includes(deviceTypeAutocomplete.value.label.toLowerCase())) {
                        keep = false;
                    }
                }
                
                if (keep && kioskIdField && kioskIdField.value) {
                    if (!device.kioskId.toLowerCase().includes(kioskIdField.value.toLowerCase())) {
                        keep = false;
                    }
                }
                
                if (keep && deviceNameField && deviceNameField.value) {
                    if (!device.deviceName.toLowerCase().includes(deviceNameField.value.toLowerCase())) {
                        keep = false;
                    }
                }
                
                // Advanced filters would go here as well
                
                return keep;
            });
            
            // Calculate the data for the current page
            const startIdx = pageIndex * pageSize;
            const endIdx = startIdx + pageSize;
            
            // Update the table with the current page data
            deviceTable.data = filtered.slice(startIdx, endIdx);
            
            // Apply status badges
            setTimeout(applyStatusBadges, 50);
        });
    }
    
    // Advanced search toggle
    const advancedSearchButton = document.querySelector('forge-button:has(forge-icon[name="arrow_drop_down"])');
    const advancedSearchContainer = document.querySelector('.advanced-search-container');
    
    if (advancedSearchButton && advancedSearchContainer) {
        advancedSearchButton.addEventListener('click', function() {
            advancedSearchContainer.classList.toggle('visible');
            
            // Toggle the icon direction
            const icon = this.querySelector('forge-icon');
            if (icon) {
                if (advancedSearchContainer.classList.contains('visible')) {
                    icon.setAttribute('name', 'arrow_drop_up');
                } else {
                    icon.setAttribute('name', 'arrow_drop_down');
                }
            }
        });
    }
    
    // Initialize filters count
    updateFiltersCount();
});
