// Sample facility data - replace with your actual data source
const facilities = [
    { value: '1', label: 'Acadia Parish Jail, LA' },
    { value: '2', label: 'Adams County, MS' },
    { value: '3', label: 'Allen County, KY' },
    { value: '4', label: 'Angelina County, TX' },
    { value: '5', label: 'Ascension Parish, LA' },
    { value: '6', label: 'Assumption Parish, LA' },
    { value: '7', label: 'Atascosa County, TX' },
    { value: '8', label: 'Atchison County Sheriffs Office, KS' },
    { value: '9', label: 'ATEF, AL 1178' },
    { value: '10', label: 'Autauga County, AL 8128' },
    { value: '11', label: 'Avoyelles Parish Cottonport Jail, LA' },
    { value: '12', label: 'Avoyelles Parish Main Jail, LA' },
    { value: '13', label: 'Baca County Jail, CO' },
    { value: '14', label: 'Bacon County, GA' },
    { value: '15', label: 'Bahamas, BA' },
    { value: '16', label: 'Bailey County, TX' },
    { value: '17', label: 'Barren County, KY' },
    { value: '18', label: 'Bell County, KY' },
    { value: '19', label: 'Bergen County Jail, NJ' },
    { value: '20', label: 'Blount County, AL' },
    { value: '21', label: 'Bluebonnet Detention Center, TX' },
    { value: '22', label: 'Bosque County, TX' },
    { value: '23', label: 'Bourbon County, KY' },
    { value: '24', label: 'Boyd County, KY' },
    { value: '25', label: 'Boyle County, KY' },
    { value: '26', label: 'Brewster County, TX' },
    { value: '27', label: 'Butler County, AL 3321' },
    { value: '28', label: 'Butler County, KY - Inmate Trust' },
    { value: '29', label: 'Calcasieu Parish, LA' },
    { value: '30', label: 'Caldwell County, TX' },
    { value: '31', label: 'Calloway County, KY' },
    { value: '32', label: 'Cameron County, TX' },
    { value: '33', label: 'Carter County, KY' },
    { value: '34', label: 'Casey County, KY NEW' },
    { value: '35', label: 'Cass County Sheriffs Office, IN' },
    { value: '36', label: 'Cedar County, MO' },
    { value: '37', label: 'Central Valley Annex, CA' },
    { value: '38', label: 'Chambers County Detention Center, AL' },
    { value: '39', label: 'Chambers County Jail, TX' },
    { value: '40', label: 'Chase County, KS' },
    { value: '41', label: 'Chaves County, NM' },
    { value: '42', label: 'Childress County, TX' },
    { value: '43', label: 'Claiborne County, TN' },
    { value: '44', label: 'Clark County, IN' },
    { value: '45', label: 'Clark County, KY' },
    { value: '46', label: 'Clarke County, AL 8156' },
    { value: '47', label: 'Clatsop County Sheriff\'s Office, OR' },
    { value: '48', label: 'Clayton County, GA' },
    { value: '49', label: 'Cobb County Office - Fingerprint' },
    { value: '50', label: 'Cobb County Office - One, GA' },
    { value: '51', label: 'Cobb County Special - Two, GA' },
    { value: '52', label: 'Coffee County, TN' },
    { value: '53', label: 'Coleman County Jail, TX' },
    { value: '54', label: 'Conecuh County, AL 8126' },
    { value: '55', label: 'Coosa County, AL' },
    { value: '56', label: 'Creek County, OK' },
    { value: '57', label: 'Crenshaw County, AL 3860' },
    { value: '58', label: 'Curry County Detention Center, NM' },
    { value: '59', label: 'Curry County Jail - O/I, OR' },
    { value: '60', label: 'Dale County, AL' },
    { value: '61', label: 'Danville Juvenile Detention Center, VA' },
    { value: '62', label: 'Davidson County, TN (CDF/MCC) - Resource Project' },
    { value: '63', label: 'Davidson County, TN (CDM/DDC) - Resource Project' },
    { value: '64', label: 'Daviess County Detention Center, KY' },
    { value: '65', label: 'Deaf Smith County, TX' },
    { value: '66', label: 'Decatur County, KS' },
    { value: '67', label: 'Denton County Jail, TX' },
    { value: '68', label: 'Dismas Charities, KY' },
    { value: '69', label: 'Dunn County Jail, WI' },
    { value: '70', label: 'East Hidalgo Detention Center, TX' },
    { value: '71', label: 'El Dorado, CA' },
    { value: '72', label: 'Ellis County, KS' },
    { value: '73', label: 'Elmore County, AL 5736' },
    { value: '74', label: 'ENSENADA' },
    { value: '75', label: 'Esmeralda County, NV' },
    { value: '76', label: 'EVDF, TX' },
    { value: '77', label: 'Fayette County, TN' },
    { value: '78', label: 'Ford County, KS' },
    { value: '79', label: 'Freestone County Jail, TX' },
    { value: '80', label: 'Fremont County Jail, CO' },
    { value: '81', label: 'Gadsden Correctional Facility FL' },
    { value: '82', label: 'Gilpin County Jail, CO' },
    { value: '83', label: 'Golden State Annex, CA' },
    { value: '84', label: 'Graham County, KS' },
    { value: '85', label: 'Grant County - Sheridan City Detention, AR' },
    { value: '86', label: 'Grant County, KS' },
    { value: '87', label: 'Grant County, KY' },
    { value: '88', label: 'Grant Parish, LA' },
    { value: '89', label: 'Gray County, TX' },
    { value: '90', label: 'Greene County, AL 8127' },
    { value: '91', label: 'Greenup County, KY' },
    { value: '92', label: 'Greenwood County, KS' },
    { value: '93', label: 'Hamilton County, KS' },
    { value: '94', label: 'Hardin County, KY' },
    { value: '95', label: 'Harlan County, KY' },
    { value: '96', label: 'Harper County, KS' },
    { value: '97', label: 'Harrison County Detention Center, MS' },
    { value: '98', label: 'Harrison County, IN - NEW 2022' },
    { value: '99', label: 'Hart County Jail, KY' },
    { value: '100', label: 'Haskell County, KS' },
    { value: '101', label: 'Henderson, KY' },
    { value: '102', label: 'Henry County, AL' },
    { value: '103', label: 'Holmes County, FL' },
    { value: '104', label: 'Hopkins County, TX' },
    { value: '105', label: 'Houston County Detention Center, GA' },
    { value: '106', label: 'Humboldt County, CA' },
    { value: '107', label: 'Iberia Parish, LA' },
    { value: '108', label: 'Iberville Parish, LA' },
    { value: '109', label: 'Jackson County Detention Center, KY' },
    { value: '110', label: 'Jackson County, MS' },
    { value: '111', label: 'Jasper County Detention Center, SC' },
    { value: '112', label: 'Jefferson County, AL' },
    { value: '113', label: 'Jenkins County, GA' },
    { value: '114', label: 'Jessamine County, KY' },
    { value: '115', label: 'Johnson County Adult Detention Center, KS' },
    { value: '116', label: 'Jones County Adult Detention Center, MS' },
    { value: '117', label: 'Kendall County, TX' },
    { value: '118', label: 'Kentucky River Regional Jail, KY' },
    { value: '119', label: 'Kerr County, TX' },
    { value: '120', label: 'Kingman County, KS' },
    { value: '121', label: 'Kings County (Juvenile), CA' },
    { value: '122', label: 'Kings County Jail (Adult), CA' },
    { value: '123', label: 'Kintock Group - Bridgeton, NJ' },
    { value: '124', label: 'Kintock Group - Newark, NJ' },
    { value: '125', label: 'Kintock Group - Philadelphia, PA' },
    { value: '126', label: 'Kiowa County, KS' },
    { value: '127', label: 'Knox County, KY' },
    { value: '128', label: 'Knox County, TN' },
    { value: '129', label: 'Lake County, TN' },
    { value: '130', label: 'Lamar County, TX' },
    { value: '131', label: 'Lamb County, TX' },
    { value: '132', label: 'Larimer County, CO' },
    { value: '133', label: 'Larue County, KY' },
    { value: '134', label: 'LaSalle County Regional Detention Center, TX' },
    { value: '135', label: 'LaSalle County, TX' },
    { value: '136', label: 'Latimer County, OK' },
    { value: '137', label: 'Lauderdale County, MS' },
    { value: '138', label: 'Laurel County, KY' },
    { value: '139', label: 'Lawrence County, TN' },
    { value: '140', label: 'Lee County, AL' },
    { value: '141', label: 'Leslie County, KY' },
    { value: '142', label: 'Letcher County, KY' },
    { value: '143', label: 'Lewis and Clark County Jail, MT' },
    { value: '144', label: 'Lincoln County Jail, TN' },
    { value: '145', label: 'Live Oak County, TX' },
    { value: '146', label: 'Logan County, KY - Inmate Trust' },
    { value: '147', label: 'Lowndes County, AL 8215' },
    { value: '148', label: 'Lynn County, TX' },
    { value: '149', label: 'Lyon County, KS' },
    { value: '150', label: 'Macon County, AL' },
    { value: '151', label: 'Madison County Criminal Justice Complex, TN' },
    { value: '152', label: 'Madison County, AL' },
    { value: '153', label: 'Marion County, AL' },
    { value: '154', label: 'Marion County, AR' },
    { value: '155', label: 'Marion County, OR' },
    { value: '156', label: 'Marshall County, KS' },
    { value: '157', label: 'Maury County, TN' },
    { value: '158', label: 'McCulloch County Jail, TX' },
    { value: '159', label: 'Meade County, KY' },
    { value: '160', label: 'Medina County Jail, TX' },
    { value: '161', label: 'Mills County, TX' },
    { value: '162', label: 'Missoula County, MT' },
    { value: '163', label: 'Monroe County, AR' },
    { value: '164', label: 'Montgomery City, AL 2414' },
    { value: '165', label: 'Montgomery County, KS' },
    { value: '166', label: 'Montgomery County, KY' },
    { value: '167', label: 'Montgomery County, TN' },
    { value: '168', label: 'Montrose County, CO' },
    { value: '169', label: 'Moore County Detention Center, NC' },
    { value: '170', label: 'Morgan County, AL - NEW 1/30/2023' },
    { value: '171', label: 'Morgan County, IN' },
    { value: '172', label: 'Muscle Shoals, AL' },
    { value: '173', label: 'Nelson County, KY' },
    { value: '174', label: 'Newton County Jail, MS' },
    { value: '175', label: 'Nolan County, TX' },
    { value: '176', label: 'Oldham County, KY' },
    { value: '177', label: 'Oriana House - The McDonnell Center, OH' },
    { value: '178', label: 'Pawnee County, KS' },
    { value: '179', label: 'Pike County, AL 4347' },
    { value: '180', label: 'Pike County, KY' },
    { value: '181', label: 'Pittsburg County, OK' },
    { value: '182', label: 'Plaquemines Parish, LA' },
    { value: '183', label: 'Powell County, KY' },
    { value: '184', label: 'Prairie County, AR' },
    { value: '185', label: 'Pushmataha County, OK' },
    { value: '186', label: 'Putnam County, TN' },
    { value: '187', label: 'Rains County Jail, TX' },
    { value: '188', label: 'Randolph County, IL' },
    { value: '189', label: 'Rapides Parish Detention Center 1, LA' },
    { value: '190', label: 'Rapides Parish Detention Center 3, LA' },
    { value: '191', label: 'Red Willow County Jail, NE' },
    { value: '192', label: 'Republic County Jail, KS' },
    { value: '193', label: 'Rockcastle, KY' },
    { value: '194', label: 'Rooks County, KS' },
    { value: '195', label: 'Rowan County, KY' },
    { value: '196', label: 'Rutherford County, TN - ICS' },
    { value: '197', label: 'Rutherford Work Center, TN - ICS' },
    { value: '198', label: 'San Jacinto County, TX' },
    { value: '199', label: 'Scott County Detention Center, KY' },
    { value: '200', label: 'Seminole County, OK' },
    { value: '201', label: 'Sevier County, UT' },
    { value: '202', label: 'Shackelford County, TX' },
    { value: '203', label: 'Sheridan County Sheriff, WY' },
    { value: '204', label: 'Simpson County, KY - Inmate Account NEW' },
    { value: '205', label: 'Somervell County, TX' },
    { value: '206', label: 'South Louisiana Detention Facility, LA' },
    { value: '207', label: 'St. Charles Parish, LA' },
    { value: '208', label: 'St. James Parish, LA' },
    { value: '209', label: 'St. Landry Parish, LA' },
    { value: '210', label: 'St. Martin Parish Corrections 1 - Main Jail, LA' },
    { value: '211', label: 'Sullivan County Jail, IN' },
    { value: '212', label: 'Sullivan County, TN (Community Readiness)' },
    { value: '213', label: 'Sumner County Detention Center, KS' },
    { value: '214', label: 'Terrebonne Parish, LA' },
    { value: '215', label: 'Test Facility - Dane County, WI' },
    { value: '216', label: 'Thomas County Jail, KS' },
    { value: '217', label: 'Thurston County, NE' },
    { value: '218', label: 'Tillamook County, OR' },
    { value: '219', label: 'Tohono Oodham Nation, AZ' },
    { value: '220', label: 'Trego County, KS' },
    { value: '221', label: 'Upshur County, TX' },
    { value: '222', label: 'Upton County Jail, TX' },
    { value: '223', label: 'Valley County Sheriffs Office, MT' },
    { value: '224', label: 'Vanderburgh County, IN' },
    { value: '225', label: 'Vigo County Jail, IN' },
    { value: '226', label: 'Wasatch County Sheriff\'s Office, UT' },
    { value: '227', label: 'Washington County, AL 2202' },
    { value: '228', label: 'Wayne County Detention Center, MS' },
    { value: '229', label: 'Wayne County, KY- New' },
    { value: '230', label: 'Weakley County Detention Center, TN' },
    { value: '231', label: 'West Baton Rouge Parish, LA' },
    { value: '232', label: 'Wharton County, TX' },
    { value: '233', label: 'Whitley County, IN' },
    { value: '234', label: 'Williamson County, TN' },
    { value: '235', label: 'Winston County, AL 8765' },
    { value: '236', label: 'Woodford County, KY' },
    { value: '237', label: 'Yamhill County Jail, OR' },
    { value: '238', label: 'Zapata County, TX' },
    { value: '239', label: 'Zavala County Jail, TX' }
];

// Get references to elements
const facilityAutocomplete = document.querySelector('.facility-autocomplete');
const filtersAppliedLabel = document.querySelector('.filters-applied-label');
const resetFiltersButton = document.querySelector('.reset-filters-button');
const applyFiltersButton = document.querySelector('.apply-filters-button');
const clearFilterButton = document.querySelector('.clear-filter-button');
const expansionPanel = document.querySelector('forge-expansion-panel');
const openIcon = document.querySelector('.drawer-card-open-icon');

// Prevent expansion panel from toggling on header click
const panelHeader = document.querySelector('.drawer-card-header');
panelHeader.addEventListener('click', (event) => {
    // Only prevent default if clicking the header itself, not its children
    if (event.target === panelHeader) {
        event.preventDefault();
        event.stopPropagation();
    }
});

// Handle open icon click to toggle panel
openIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    expansionPanel.open = !expansionPanel.open;
});

// Initialize facility autocomplete
facilityAutocomplete.filter = (text, value) => {
    // If there's no filter text, return all facilities
    if (!text) {
        return facilities;
    }

    // Filter facilities based on the input text
    return facilities.filter(facility =>
        facility.label.toLowerCase().includes(text.toLowerCase())
    );
};

// Handle facility selection
facilityAutocomplete.addEventListener('forge-autocomplete-change', (event) => {
    const selectedFacility = event.detail;
    updateFiltersCount();
});

// Handle reset filters
resetFiltersButton.addEventListener('click', () => {
    facilityAutocomplete.value = null;
    updateFiltersCount();
});

// Handle clear filter button
clearFilterButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the header
    facilityAutocomplete.value = null;
    // Clear the input field
    const input = facilityAutocomplete.querySelector('input');
    if (input) {
        input.value = '';
    }
    updateFiltersCount();
});

// Handle apply filters
applyFiltersButton.addEventListener('click', () => {
    // Here you would typically trigger a data refresh with the selected filters
    console.log('Applying filters with facility:', facilityAutocomplete.value);
});

// Update the filters count
function updateFiltersCount() {
    const activeFilters = facilityAutocomplete.value ? 1 : 0;
    filtersAppliedLabel.textContent = `${activeFilters} filter${activeFilters !== 1 ? 's' : ''} applied`;
}

// Initialize filters count
updateFiltersCount(); 

document.addEventListener('DOMContentLoaded', function() {
    // Get references to filter drawer elements
    const filterDrawer = document.getElementById('filter-drawer');
    const filterButton = document.getElementById('filter-devices-button');
    const closeFilterButton = document.getElementById('close-filter-drawer');

    // Handle filter button click
    filterButton.addEventListener('click', () => {
        filterDrawer.open = true;
    });

    // Handle close button click
    closeFilterButton.addEventListener('click', () => {
        filterDrawer.open = false;
    });

    // Handle drawer after-close event
    filterDrawer.addEventListener('forge-drawer-after-close', () => {
        console.log('Filter drawer closed');
    });

    // Handle drawer after-open event
    filterDrawer.addEventListener('forge-drawer-after-open', () => {
        console.log('Filter drawer opened');
    });

    // Sample value pools
    const kioskIds = Array.from({length: 900}, (_, i) => (23000 + i).toString());
    const deviceTypes = ['Lobby', 'Booking', 'Cart', 'Inmate', 'Video Visit - Remote', 'Charging Station', 'Vending Machine'];
    const hardwareTypes = ['', 'Windows Kiosk', 'Windows Tablet', 'Android'];
    const statusValues = ['Online', 'Error', 'Maintenance', 'Offline'];
    const deviceNames = [
      'DBOVS-AAGFV', 'DBOVS-AAGGK', 'DBOVS-AAGGQ', 'DBOVS-AAGHF', 'DBOVS-AAGHN', 'DBOVS-AAGIH', 'DBOVS-AAGJK', 'DBOVS-AAGJX', 'DBOVS-AAGKL', 'DBOVS-AAGKS', 'DBOVS-AAGKZ', 'DBOVS-AAGMG', 'DBOVS-AAGLX', 'DBOVS-AAGPU', 'DBOVS-AAGPT', 'DBOVS-AAGPV', 'DBOVS-AAGQE', 'DBOVS-AAGQN', 'DBOVS-AAGQS', 'DBOVS-AAGRY', 'DBOVS-AAGSH', 'DBOVS-AAGSK', 'DBOVS-AAGST', 'DBOVS-AAGTI', 'DBOVS-AAGTU', 'DBOVS-AAGTZ', 'DBOVS-AAGUA', 'DBOVS-AAGWM', 'DBOVS-AAGWO', 'DBOVS-AAGWN', 'DBOVS-AAGXC', 'DBOVS-AAGXO', '707 MIDDLE LEFT', '618 Middle', '506 Left', 'Visitation 6', '309 Left', '644 Left', 'DBOVS-AAJHL', 'DBOVS-AAJHM', 'DBOVS-AAJHX', 'DBOVS-AAJHU', 'DBOVS-AAJIH', 'DBOVS-AAJKH', 'DBOVS-AAJHZ', 'DBOVS-AAJIF', 'DBOVS-AAJIR', 'DBOVS-AAJJU'
    ];

    // Use the facilities array from script.js if available, else fallback
    let facilities = window.facilities || [
        { label: 'Acadia Parish Jail, LA' },
        { label: 'Adams County, MS' },
        { label: 'Allen County, KY' },
        { label: 'Angelina County, TX' },
        { label: 'Ascension Parish, LA' },
        { label: 'Assumption Parish, LA' },
        { label: 'Atascosa County, TX' },
        { label: 'Atchison County Sheriffs Office, KS' },
        { label: 'ATEF, AL 1178' },
        { label: 'Autauga County, AL 8128' },
        { label: 'Avoyelles Parish Cottonport Jail, LA' },
        { label: 'Avoyelles Parish Main Jail, LA' },
        { label: 'Baca County Jail, CO' },
        { label: 'Bacon County, GA' },
        { label: 'Bahamas, BA' },
        { label: 'Bailey County, TX' },
        { label: 'Barren County, KY' },
        { label: 'Bell County, KY' },
        { label: 'Bergen County Jail, NJ' },
        { label: 'Blount County, AL' },
        { label: 'Bluebonnet Detention Center, TX' },
        { label: 'Bosque County, TX' },
        { label: 'Bourbon County, KY' },
        { label: 'Boyd County, KY' },
        { label: 'Boyle County, KY' },
        { label: 'Brewster County, TX' },
        { label: 'Butler County, AL 3321' },
        { label: 'Butler County, KY - Inmate Trust' },
        { label: 'Calcasieu Parish, LA' },
        { label: 'Caldwell County, TX' },
        { label: 'Calloway County, KY' },
        { label: 'Cameron County, TX' },
        { label: 'Carter County, KY' },
        { label: 'Casey County, KY NEW' },
        { label: 'Cass County Sheriffs Office, IN' },
        { label: 'Cedar County, MO' },
        { label: 'Central Valley Annex, CA' },
        { label: 'Chambers County Detention Center, AL' },
        { label: 'Chambers County Jail, TX' },
        { label: 'Chase County, KS' },
        { label: 'Chaves County, NM' },
        { label: 'Childress County, TX' },
        { label: 'Claiborne County, TN' },
        { label: 'Clark County, IN' },
        { label: 'Clark County, KY' },
        { label: 'Clarke County, AL 8156' },
        { label: 'Clatsop County Sheriff\'s Office, OR' },
        { label: 'Clayton County, GA' },
        { label: 'Cobb County Office - Fingerprint' },
        { label: 'Cobb County Office - One, GA' },
        { label: 'Cobb County Special - Two, GA' },
        { label: 'Coffee County, TN' },
        { label: 'Coleman County Jail, TX' },
        { label: 'Conecuh County, AL 8126' },
        { label: 'Coosa County, AL' },
        { label: 'Creek County, OK' },
        { label: 'Crenshaw County, AL 3860' },
        { label: 'Curry County Detention Center, NM' },
        { label: 'Curry County Jail - O/I, OR' },
        { label: 'Dale County, AL' },
        { label: 'Danville Juvenile Detention Center, VA' },
        { label: 'Davidson County, TN (CDF/MCC) - Resource Project' },
        { label: 'Davidson County, TN (CDM/DDC) - Resource Project' },
        { label: 'Daviess County Detention Center, KY' },
        { label: 'Deaf Smith County, TX' },
        { label: 'Decatur County, KS' },
        { label: 'Denton County Jail, TX' },
        { label: 'Dismas Charities, KY' },
        { label: 'Dunn County Jail, WI' },
        { label: 'East Hidalgo Detention Center, TX' },
        { label: 'El Dorado, CA' },
        { label: 'Ellis County, KS' },
        { label: 'Elmore County, AL 5736' },
        { label: 'ENSENADA' },
        { label: 'Esmeralda County, NV' },
        { label: 'EVDF, TX' },
        { label: 'Fayette County, TN' },
        { label: 'Ford County, KS' },
        { label: 'Freestone County Jail, TX' },
        { label: 'Fremont County Jail, CO' },
        { label: 'Gadsden Correctional Facility FL' },
        { label: 'Gilpin County Jail, CO' },
        { label: 'Golden State Annex, CA' },
        { label: 'Graham County, KS' },
        { label: 'Grant County - Sheridan City Detention, AR' },
        { label: 'Grant County, KS' },
        { label: 'Grant County, KY' },
        { label: 'Grant Parish, LA' },
        { label: 'Gray County, TX' },
        { label: 'Greene County, AL 8127' },
        { label: 'Greenup County, KY' },
        { label: 'Greenwood County, KS' },
        { label: 'Hamilton County, KS' },
        { label: 'Hardin County, KY' },
        { label: 'Harlan County, KY' },
        { label: 'Harper County, KS' },
        { label: 'Harrison County Detention Center, MS' },
        { label: 'Harrison County, IN - NEW 2022' },
        { label: 'Hart County Jail, KY' },
        { label: 'Haskell County, KS' },
        { label: 'Henderson, KY' },
        { label: 'Henry County, AL' },
        { label: 'Holmes County, FL' },
        { label: 'Hopkins County, TX' },
        { label: 'Houston County Detention Center, GA' },
        { label: 'Humboldt County, CA' },
        { label: 'Iberia Parish, LA' },
        { label: 'Iberville Parish, LA' },
        { label: 'Jackson County Detention Center, KY' },
        { label: 'Jackson County, MS' },
        { label: 'Jasper County Detention Center, SC' },
        { label: 'Jefferson County, AL' },
        { label: 'Jenkins County, GA' },
        { label: 'Jessamine County, KY' },
        { label: 'Johnson County Adult Detention Center, KS' },
        { label: 'Jones County Adult Detention Center, MS' },
        { label: 'Kendall County, TX' },
        { label: 'Kentucky River Regional Jail, KY' },
        { label: 'Kerr County, TX' },
        { label: 'Kingman County, KS' },
        { label: 'Kings County (Juvenile), CA' },
        { label: 'Kings County Jail (Adult), CA' },
        { label: 'Kintock Group - Bridgeton, NJ' },
        { label: 'Kintock Group - Newark, NJ' },
        { label: 'Kintock Group - Philadelphia, PA' },
        { label: 'Kiowa County, KS' },
        { label: 'Knox County, KY' },
        { label: 'Knox County, TN' },
        { label: 'Lake County, TN' },
        { label: 'Lamar County, TX' },
        { label: 'Lamb County, TX' },
        { label: 'Larimer County, CO' },
        { label: 'Larue County, KY' },
        { label: 'LaSalle County Regional Detention Center, TX' },
        { label: 'LaSalle County, TX' },
        { label: 'Latimer County, OK' },
        { label: 'Lauderdale County, MS' },
        { label: 'Laurel County, KY' },
        { label: 'Lawrence County, TN' },
        { label: 'Lee County, AL' },
        { label: 'Leslie County, KY' },
        { label: 'Letcher County, KY' },
        { label: 'Lewis and Clark County Jail, MT' },
        { label: 'Lincoln County Jail, TN' },
        { label: 'Live Oak County, TX' },
        { label: 'Logan County, KY - Inmate Trust' },
        { label: 'Lowndes County, AL 8215' },
        { label: 'Lynn County, TX' },
        { label: 'Lyon County, KS' },
        { label: 'Macon County, AL' },
        { label: 'Madison County Criminal Justice Complex, TN' },
        { label: 'Madison County, AL' },
        { label: 'Marion County, AL' },
        { label: 'Marion County, AR' },
        { label: 'Marion County, OR' },
        { label: 'Marshall County, KS' },
        { label: 'Maury County, TN' },
        { label: 'McCulloch County Jail, TX' },
        { label: 'Meade County, KY' },
        { label: 'Medina County Jail, TX' },
        { label: 'Mills County, TX' },
        { label: 'Missoula County, MT' },
        { label: 'Monroe County, AR' },
        { label: 'Montgomery City, AL 2414' },
        { label: 'Montgomery County, KS' },
        { label: 'Montgomery County, KY' },
        { label: 'Montgomery County, TN' },
        { label: 'Montrose County, CO' },
        { label: 'Moore County Detention Center, NC' },
        { label: 'Morgan County, AL - NEW 1/30/2023' },
        { label: 'Morgan County, IN' },
        { label: 'Muscle Shoals, AL' },
        { label: 'Nelson County, KY' },
        { label: 'Newton County Jail, MS' },
        { label: 'Nolan County, TX' },
        { label: 'Oldham County, KY' },
        { label: 'Oriana House - The McDonnell Center, OH' },
        { label: 'Pawnee County, KS' },
        { label: 'Pike County, AL 4347' },
        { label: 'Pike County, KY' },
        { label: 'Pittsburg County, OK' },
        { label: 'Plaquemines Parish, LA' },
        { label: 'Powell County, KY' },
        { label: 'Prairie County, AR' },
        { label: 'Pushmataha County, OK' },
        { label: 'Putnam County, TN' },
        { label: 'Rains County Jail, TX' },
        { label: 'Randolph County, IL' },
        { label: 'Rapides Parish Detention Center 1, LA' },
        { label: 'Rapides Parish Detention Center 3, LA' },
        { label: 'Red Willow County Jail, NE' },
        { label: 'Republic County Jail, KS' },
        { label: 'Rockcastle, KY' },
        { label: 'Rooks County, KS' },
        { label: 'Rowan County, KY' },
        { label: 'Rutherford County, TN - ICS' },
        { label: 'Rutherford Work Center, TN - ICS' },
        { label: 'San Jacinto County, TX' },
        { label: 'Scott County Detention Center, KY' },
        { label: 'Seminole County, OK' },
        { label: 'Sevier County, UT' },
        { label: 'Shackelford County, TX' },
        { label: 'Sheridan County Sheriff, WY' },
        { label: 'Simpson County, KY - Inmate Account NEW' },
        { label: 'Somervell County, TX' },
        { label: 'South Louisiana Detention Facility, LA' },
        { label: 'St. Charles Parish, LA' },
        { label: 'St. James Parish, LA' },
        { label: 'St. Landry Parish, LA' },
        { label: 'St. Martin Parish Corrections 1 - Main Jail, LA' },
        { label: 'Sullivan County Jail, IN' },
        { label: 'Sullivan County, TN (Community Readiness)' },
        { label: 'Sumner County Detention Center, KS' },
        { label: 'Terrebonne Parish, LA' },
        { label: 'Test Facility - Dane County, WI' },
        { label: 'Thomas County Jail, KS' },
        { label: 'Thurston County, NE' },
        { label: 'Tillamook County, OR' },
        { label: 'Tohono Oodham Nation, AZ' },
        { label: 'Trego County, KS' },
        { label: 'Upshur County, TX' },
        { label: 'Upton County Jail, TX' },
        { label: 'Valley County Sheriffs Office, MT' },
        { label: 'Vanderburgh County, IN' },
        { label: 'Vigo County Jail, IN' },
        { label: 'Wasatch County Sheriff\'s Office, UT' },
        { label: 'Washington County, AL 2202' },
        { label: 'Wayne County Detention Center, MS' },
        { label: 'Wayne County, KY- New' },
        { label: 'Weakley County Detention Center, TN' },
        { label: 'West Baton Rouge Parish, LA' },
        { label: 'Wharton County, TX' },
        { label: 'Whitley County, IN' },
        { label: 'Williamson County, TN' },
        { label: 'Winston County, AL 8765' },
        { label: 'Woodford County, KY' },
        { label: 'Yamhill County Jail, OR' },
        { label: 'Zapata County, TX' },
        { label: 'Zavala County Jail, TX' }
      ];
    // Always use the .label property for facility names
    const facilityNames = facilities.map(f => f.label);

    // Helper to get a random item from an array
    function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    // Generate 40 rows of random data
    const allDeviceData = Array.from({length: 900}, () => {
      // Generate status with specific distribution:
      // 80% Online, 10% Error, 5% Offline, 5% Maintenance
      let status;
      const statusRandom = Math.random() * 110;
if (statusRandom < 90) {
  status = 'Online';        // 90/110 ≈ 81.8%
} else if (statusRandom < 95) {
  status = 'Error';         // 5/110 ≈ 4.5%
} else if (statusRandom < 100) {
  status = 'Offline';       // 5/110 ≈ 4.5%
} else {
  status = 'Maintenance';   // 10/110 ≈ 9.1%
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

    // Make the data accessible globally for direct DOM event handlers
    window.allDeviceData = allDeviceData;

    const deviceTable = document.getElementById('device-table');
    const paginator = document.getElementById('device-table-paginator');
    const actionButtons = document.querySelector('.device-action-buttons');
    const emptyState = document.querySelector('.device-empty-state');
    const noResultsState = document.querySelector('.device-no-results-state');
    const tableFooter = document.querySelector('.table-footer');
    const findDevicesForm = document.querySelector('.find-devices-form form') || document.querySelector('.find-devices-form');
    const deviceCountElement = document.querySelector('.device-count');

    // Hide table and paginator, show empty state by default
    deviceTable.style.display = 'none';
    tableFooter.style.display = 'none';
    emptyState.style.display = '';
    noResultsState.style.display = 'none';
    
    // Set initial device count to 0
    if (deviceCountElement) {
        deviceCountElement.textContent = '0 devices found';
    }

    // Handle Find Devices form submit
    findDevicesForm.addEventListener('submit', function(event) {
        console.log('Find Devices form submitted!');
        event.preventDefault();
        // Get form field values
        const facilityAutocomplete = document.querySelector('.find-devices-form forge-autocomplete');
        let facilityValue = '';
        if (facilityAutocomplete && facilityAutocomplete.value && facilityAutocomplete.value.label) {
            facilityValue = facilityAutocomplete.value.label.trim().toLowerCase();
        } else {
            // fallback to input value if no selection
            facilityValue = facilityAutocomplete?.querySelector('input')?.value.trim().toLowerCase() || '';
        }
        const deviceTypeAutocomplete = document.querySelector('.device-type-autocomplete');
        let deviceTypeValue = '';
        if (deviceTypeAutocomplete && deviceTypeAutocomplete.value && deviceTypeAutocomplete.value.label) {
            deviceTypeValue = deviceTypeAutocomplete.value.label.trim().toLowerCase();
        } else {
            deviceTypeValue = deviceTypeAutocomplete?.querySelector('input')?.value.trim().toLowerCase() || '';
        }
        const kioskIdValue = document.querySelector('.find-devices-form forge-text-field input[placeholder="Search for kiosk ID"]')?.value.trim().toLowerCase();
        const deviceNameValue = document.querySelector('.find-devices-form forge-text-field input[placeholder="Search for device name"]')?.value.trim().toLowerCase();

        // Debug log
        console.log('Filtering with:', {facilityValue, deviceTypeValue, kioskIdValue, deviceNameValue});

        // Filter allDeviceData with partial, case-insensitive match for all fields
        const filtered = allDeviceData.filter(device => {
            if (facilityValue && !device.facility.toLowerCase().includes(facilityValue)) return false;
            if (deviceTypeValue && !device.deviceType.toLowerCase().includes(deviceTypeValue)) return false;
            if (kioskIdValue && !device.kioskId.toLowerCase().includes(kioskIdValue)) return false;
            if (deviceNameValue && !device.deviceName.toLowerCase().includes(deviceNameValue)) return false;
            return true;
        });

        console.log('Filtered results:', filtered.length);

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
            setTimeout(applyStatusBadges, 50);
        } else {
            deviceTable.style.display = 'none';
            tableFooter.style.display = 'none';
            emptyState.style.display = 'none';
            noResultsState.style.display = '';
        }
    });

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
      // Sample data arrays for device details
      const kioskLocations = [
        'WR Pod 4 Kiosk', 'Main Lobby East', 'Booking Area North', 'Housing Unit 3B',
        'Medical Wing Entrance', 'Visitation Area South', 'Admin Hallway', 'Kitchen Access',
        'Recreation Area 2', 'Library Entrance', 'Programs Room 116', 'Staff Break Room',
        'Intake Processing', 'Housing Unit 2A', 'Central Command', 'Watch Commander Office',
        'Holding Cell Block', 'Trustee Dorm', 'Classification Area', 'Commissary Window'
      ];
    
      const allowedLocations = [
        'KCWRC-WR4', 'MAIN-LOB-E1', 'BOOK-AREA-N', 'HSG-3B-ALL',
        'MED-WING-ENT', 'VISIT-SOUTH', 'ADMIN-HALL-1', 'KTCH-ACC-A1',
        'REC-AREA-2', 'LIB-ENT-MAIN', 'PROG-RM-116', 'STAFF-BRK-RM',
        'INTK-PROC-1', 'HSG-2A-ALL', 'CTRL-CMD-CTR', 'WATCH-CMD-OFC',
        'HOLD-CELL-BLK', 'TRUST-DORM-A', 'CLASS-AREA-1', 'COMM-WIN-1'
      ];
    
      const lastCheckInTimes = [
        '5/14/2025 – 2:45 pm EDT (3 minutes ago)',
        '5/14/2025 – 2:18 pm EDT (30 minutes ago)',
        '5/14/2025 – 1:07 pm EDT (1 hour 41 minutes ago)',
        '5/14/2025 – 11:32 am EDT (3 hours 16 minutes ago)',
        '5/14/2025 – 9:15 am EDT (5 hours 33 minutes ago)',
        '5/14/2025 – 7:54 am EDT (6 hours 54 minutes ago)',
        '5/14/2025 – 6:12 am EDT (8 hours 36 minutes ago)',
        '5/13/2025 – 11:47 pm EDT (15 hours 1 minute ago)',
        '5/13/2025 – 8:33 pm EDT (18 hours 15 minutes ago)',
        '5/13/2025 – 5:22 pm EDT (21 hours 26 minutes ago)',
        '5/13/2025 – 2:08 pm EDT (yesterday)',
        '5/13/2025 – 10:45 am EDT (yesterday)',
        '5/12/2025 – 4:17 pm EDT (2 days ago)',
        '5/12/2025 – 9:28 am EDT (2 days ago)',
        '5/11/2025 – 3:52 pm EDT (3 days ago)',
        '5/10/2025 – 7:19 am EDT (4 days ago)',
        '5/8/2025 – 12:04 pm EDT (6 days ago)',
        '5/5/2025 – 8:37 am EDT (9 days ago)',
        '5/1/2025 – 2:59 pm EDT (13 days ago)',
        '4/26/2025 – 11:23 am EDT (18 days ago)'
      ];
    
      const lockdownValues = ['Yes', 'No'];
    
      // Get random values from the arrays
      const randomKioskLocation = kioskLocations[Math.floor(Math.random() * kioskLocations.length)];
      const randomAllowedLocation = allowedLocations[Math.floor(Math.random() * allowedLocations.length)];
      const randomLastCheckIn = lastCheckInTimes[Math.floor(Math.random() * lastCheckInTimes.length)];
      const randomLockdown = lockdownValues[Math.floor(Math.random() * lockdownValues.length)];
    
      // Additional details - could be randomized as well
      const deviceData = deviceTable.data[rowIndex] || {};
      const deviceStatus = deviceData.status || 'Unknown';
      
      // Create different content based on device status
      let additionalDetails = '';
      
      
    
      
    
      return `
        <div class="forge-table-expandable-row">
          <forge-card outlined>
            <h2 class="forge-typography--overline inner-title">Device Details</h2>
            <div class="card-inner">
              <div style="display: flex; gap:100px;">
                <forge-label-value>
                  <span slot="label">Kiosk location</span>
                  <span slot="value">${randomKioskLocation}</span>
                </forge-label-value>
                <forge-label-value>
                  <span slot="label">Allowed kiosk locations</span>
                  <span slot="value">${randomAllowedLocation}</span>
                </forge-label-value>
                <forge-label-value>
                  <span slot="label">Last check-in</span>
                  <span slot="value">${randomLastCheckIn}</span>
                </forge-label-value>
                <forge-label-value>
                  <span slot="label">Lockdown enabled</span>
                  <span slot="value">${randomLockdown}</span>
                </forge-label-value>
              </div>
              
            </div>
          </forge-card>
        </div>
      `;
    }

    // Row click for navigation (ignore clicks on expand icon)
    deviceTable.addEventListener('forge-table-row-click', (event) => {
      if (event.detail.originalEvent?.target?.closest('forge-icon-button')) return;
      const rowData = event.detail.data;
      if (!rowData) return;
      const queryParams = new URLSearchParams(Object.entries(rowData));
      window.location.href = `index2.html?${queryParams.toString()}`;
    });

    // Sort the data to put Error status first, then by facility name
    allDeviceData.sort((a, b) => {
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

    // Set paginator total and reset to first page
    paginator.total = allDeviceData.length;
    paginator.pageIndex = 0;

    function updateTablePage(pageIndex, pageSize) {
      const startIdx = pageIndex * pageSize;
      const endIdx = startIdx + pageSize;
      deviceTable.data = allDeviceData.slice(startIdx, endIdx);
      
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

    // Initial render
    updateTablePage(paginator.pageIndex, paginator.pageSize);

    // Listen for paginator changes
    paginator.addEventListener('forge-paginator-change', (event) => {
      const { pageIndex, pageSize } = event.detail;
      updateTablePage(pageIndex, pageSize);
    });

    // Also apply badges on sort
    deviceTable.addEventListener('forge-table-sort', () => {
      setTimeout(applyStatusBadges, 50);
    });

    // Add event listener for row selection
    deviceTable.addEventListener('forge-table-select', (event) => {
      // This event fires when a checkbox is clicked
      const selectedRows = deviceTable.getSelectedRows();
      console.log('Selected rows:', selectedRows);
      updateActionButtonsVisibility();
    });

    function updateActionButtonsVisibility() {
      const selectedRows = deviceTable.getSelectedRows ? deviceTable.getSelectedRows() : [];
      if (selectedRows && selectedRows.length > 0) {
        actionButtons.style.display = '';
      } else {
        actionButtons.style.display = 'none';
      }
    }

    // Also hide on initial load
    updateActionButtonsVisibility();

    // Setup reboot button click handler INSIDE this function
    document.getElementById('reboot-button').addEventListener('click', function() {
        console.log('Reboot button clicked');
        const rebootDialog = document.getElementById('reboot-dialog');
        if (!rebootDialog) {
            console.error('Reboot dialog not found');
            return;
        }
        const selectedRows = deviceTable.getSelectedRows ? deviceTable.getSelectedRows() : [];
        console.log('Selected rows:', selectedRows);
        // Show the dialog
        console.log('Showing dialog...');
        rebootDialog.open = true;
        // Close the dialog after 4 seconds
        setTimeout(() => {
            console.log('Closing dialog...');
            rebootDialog.open = false;
            console.log(`Rebooted ${selectedRows.length || 'all'} devices`);
        }, 4000);
    });

    // Add clear button functionality for device type select
    document.getElementById('clear-device-type').addEventListener('click', function() {
        const select = document.getElementById('device-type-select');
        select.value = '';
    });

    // --- BEGIN: index-option2.html auto-populate table ---
    if (window.location.pathname.endsWith('index-option2.html')) {
        const deviceTable = document.getElementById('device-table');
        const deviceCountElement = document.querySelector('.device-count');
        if (deviceTable && window.allDeviceData) {
            deviceTable.columnConfigurations = [
                { header: 'Kiosk ID', property: 'kioskId', sortable: true },
                { header: 'Facility', property: 'facility', sortable: true },
                { header: 'Device type', property: 'deviceType', sortable: true },
                { header: 'Hardware type', property: 'hardwareType', sortable: true },
                { header: 'Device name', property: 'deviceName', sortable: true },
                { header: 'Status', property: 'status', sortable: true }
            ];
            deviceTable.data = window.allDeviceData;
            if (deviceCountElement) {
                deviceCountElement.textContent = `${window.allDeviceData.length} device${window.allDeviceData.length === 1 ? '' : 's'} found`;
            }
        }
    }
    // --- END: index-option2.html auto-populate table ---
});

document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the menu component
  const deviceActionsMenu = document.getElementById('device-actions-menu');
  
  // Set the menu options with external icons
  deviceActionsMenu.options = [
    { 
      label: 'Reboot selected devices', 
      value: 'reboot',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'refresh');
        container.appendChild(icon);
      }
    },
    { 
      label: 'Update software', 
      value: 'update',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'system_update');
        container.appendChild(icon);
      }
    },
    { 
      label: 'Configure devices', 
      value: 'configure',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'settings');
        container.appendChild(icon);
      }
    },
    { divider: true },
    { 
      label: 'Disable devices', 
      value: 'disable',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'block');
        container.appendChild(icon);
      }
    },
    { 
      label: 'Enable maintenance mode', 
      value: 'maintenance',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'build');
        container.appendChild(icon);
      }
    },
    { divider: true },
    { 
      label: 'Remove devices', 
      value: 'remove',
      leadingBuilder: (container) => {
        const icon = document.createElement('forge-icon');
        icon.setAttribute('external', '');
        icon.setAttribute('external-type', 'standard');
        icon.setAttribute('name', 'delete');
        container.appendChild(icon);
      }
    }
  ];
  
  // Check if menu is initialized properly
  console.log('Menu options set:', deviceActionsMenu.options);
  
  // Make sure the menu mode is set properly
  deviceActionsMenu.mode = 'click';
  
  // Add event listener for selections
  deviceActionsMenu.addEventListener('forge-menu-select', function(event) {
    const value = event.detail.value;
    const table = document.getElementById('device-table');
    const selectedRows = table.getSelectedRows ? table.getSelectedRows() : [];
    
    console.log('Menu item selected:', value);
    
    // Perform action based on the selected menu item
    switch(value) {
      case 'reboot':
        alert(`Rebooting ${selectedRows.length || 'all'} devices`);
        break;
      case 'update':
        alert(`Updating software for ${selectedRows.length || 'all'} devices`);
        break;
      case 'configure':
        alert(`Configuring ${selectedRows.length || 'all'} devices`);
        break;
      case 'disable':
        alert(`Disabling ${selectedRows.length || 'all'} devices`);
        break;
      case 'maintenance':
        alert(`Enabling maintenance mode for ${selectedRows.length || 'all'} devices`);
        break;
      case 'remove':
        if (confirm(`Are you sure you want to remove ${selectedRows.length || 'all'} devices?`)) {
          alert(`Removing ${selectedRows.length || 'all'} devices`);
        }
        break;
      default:
        console.log('Unhandled action:', value);
    }
  });
  
  // If the menu still doesn't show, try using the open property directly
  deviceActionsMenu.querySelector('forge-button').addEventListener('click', function() {
    console.log('Button clicked, attempting to open menu');
    setTimeout(() => {
      if (!deviceActionsMenu.open) {
        console.log('Menu did not automatically open, forcing open state');
        deviceActionsMenu.open = true;
      }
    }, 100);
  });

  // Debug helper to check if the menu is visible when button is clicked
  document.body.addEventListener('click', function(event) {
    const menuButton = deviceActionsMenu.querySelector('forge-button');
    if (event.target === menuButton || menuButton.contains(event.target)) {
      console.log('Menu button clicked, open state:', deviceActionsMenu.open);
      setTimeout(() => console.log('Menu open state after timeout:', deviceActionsMenu.open), 500);
    }
  }, true);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the menu component
    const deviceActionsMenu = document.getElementById('device-actions-menu');
    
    // Make sure the IconRegistry has the necessary icons defined
    // This might be required if you're using external icons in the menu
    // You can skip this if your icons are already defined elsewhere
    try {
      // Import icons if needed
      // Note: Your application may already handle this elsewhere
      const { IconRegistry } = forge;
      IconRegistry.define('refresh', 'cloud_sync', 'settings', 'block', 'build', 'delete');
    } catch (e) {
      console.warn('Icon registration failed, icons might already be registered:', e);
    }
    
    // Set the menu options with simpler configuration first to test
    deviceActionsMenu.options = [
      { label: 'Reboot selected devices', value: 'reboot' },
      { label: 'Update software', value: 'update' },
      { label: 'Configure devices', value: 'configure' },
      { divider: true },
      { label: 'Disable devices', value: 'disable' },
      { label: 'Enable maintenance mode', value: 'maintenance' },
      { divider: true },
      { label: 'Remove devices', value: 'remove' }
    ];
    
    // Add event listener for selections
    deviceActionsMenu.addEventListener('forge-menu-select', function(event) {
      const value = event.detail.value;
      const table = document.getElementById('device-table');
      const selectedRows = table.getSelectedRows ? table.getSelectedRows() : [];
      
      console.log('Menu item selected:', value);
      
      // Perform action based on the selected menu item
      switch(value) {
        case 'reboot':
          alert(`Rebooting ${selectedRows.length || 'all'} devices`);
          break;
        case 'update':
          alert(`Updating software for ${selectedRows.length || 'all'} devices`);
          break;
        case 'configure':
          alert(`Configuring ${selectedRows.length || 'all'} devices`);
          break;
        case 'disable':
          alert(`Disabling ${selectedRows.length || 'all'} devices`);
          break;
        case 'maintenance':
          alert(`Enabling maintenance mode for ${selectedRows.length || 'all'} devices`);
          break;
        case 'remove':
          if (confirm(`Are you sure you want to remove ${selectedRows.length || 'all'} devices?`)) {
            alert(`Removing ${selectedRows.length || 'all'} devices`);
          }
          break;
        default:
          console.log('Unhandled action:', value);
      }
    });
    
    // Log to verify the menu is properly initialized
    console.log('Menu initialized with options:', deviceActionsMenu.options);
  });

   // Setup device actions menu
   document.addEventListener('DOMContentLoaded', function() {
    const actionsButton = document.getElementById('device-actions-button');
    const actionsPopover = document.querySelector('forge-popover[anchor="device-actions-button"]');
    
    // Handle click on menu items
    const menuItems = actionsPopover.querySelectorAll('forge-list-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the text content of the clicked menu item
            const actionText = this.querySelector('span').textContent.trim();
            console.log('Selected action:', actionText);
            
            // Get selected rows
            const table = document.getElementById('device-table');
            const selectedRows = table.getSelectedRows ? table.getSelectedRows() : [];
            
            // Perform action based on the selected menu item
            switch(actionText) {
                case 'Reboot selected devices':
                    alert(`Rebooting ${selectedRows.length || 'all'} devices`);
                    break;
                case 'Update software':
                    alert(`Updating software for ${selectedRows.length || 'all'} devices`);
                    break;
                case 'Configure devices':
                    alert(`Configuring ${selectedRows.length || 'all'} devices`);
                    break;
                case 'Disable devices':
                    alert(`Disabling ${selectedRows.length || 'all'} devices`);
                    break;
                case 'Enable maintenance mode':
                    alert(`Enabling maintenance mode for ${selectedRows.length || 'all'} devices`);
                    break;
                case 'Remove devices':
                    if (confirm(`Are you sure you want to remove ${selectedRows.length || 'all'} devices?`)) {
                        alert(`Removing ${selectedRows.length || 'all'} devices`);
                    }
                    break;
                default:
                    console.log('Unhandled action:', actionText);
            }
            
            // Close the popover after selection
            actionsPopover.open = false;
        });
    });
});

// Initialize the reboot dialog
const rebootDialog = document.getElementById('reboot-dialog');
console.log('Reboot dialog element:', rebootDialog);

// Device type autocomplete options
const deviceTypeOptions = [
  { label: 'Lobby', value: 'Lobby' },
  { label: 'Booking', value: 'Booking' },
  { label: 'Cart', value: 'Cart' },
  { label: 'Inmate', value: 'Inmate' },
  { label: 'Video Visit - Remote', value: 'Video Visit - Remote' },
  { label: 'Charging Station', value: 'Charging Station' },
  { label: 'Vending Machine', value: 'Vending Machine' }
];
const deviceTypeAutocomplete = document.querySelector('.device-type-autocomplete');
deviceTypeAutocomplete.filter = (text, value) => {
  if (!text) return deviceTypeOptions;
  return deviceTypeOptions.filter(opt => opt.label.toLowerCase().includes(text.toLowerCase()));
};

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
    const lastCheckInSelect = document.getElementById('last-checkin-select');
    const statusSelect = document.getElementById('status-select');
    
    // Table and display elements
    const deviceTable = document.getElementById('device-table');
    const paginator = document.getElementById('device-table-paginator');
    const emptyState = document.querySelector('.device-empty-state');
    const noResultsState = document.querySelector('.device-no-results-state');
    const tableFooter = document.querySelector('.table-footer');
    const deviceCountElement = document.querySelector('.device-count');
    
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
            
            // Apply status badges
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
        const rows = Array.from(deviceTable.querySelectorAll('tbody tr'));
        
        rows.forEach(row => {
            const statusCell = row.cells[6];
            
            if (statusCell && statusCell.textContent) {
                const status = statusCell.textContent.trim();
                
                if (status === 'Error') {
                    row.style.backgroundColor = 'var(--forge-theme-error-container-minimum)';
                    Array.from(row.cells).forEach(cell => {
                        cell.style.color = '';
                    });
                } else if (status === 'Offline') {
                    row.style.backgroundColor = 'var(--forge-theme-surface-dim)';
                    Array.from(row.cells).forEach(cell => {
                        cell.style.color = 'var(--forge-theme-text-medium)';
                    });
                } else {
                    row.style.backgroundColor = '';
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
    
    // Initialize facility autocomplete
    if (facilityAutocomplete) {
        facilityAutocomplete.filter = (text, value) => {
            if (!text) return facilities;
            return facilities.filter(facility => 
                facility.label.toLowerCase().includes(text.toLowerCase())
            );
        };
    }
    
    // Handle paginator changes
    if (paginator) {
        paginator.addEventListener('forge-paginator-change', (event) => {
            const { pageIndex, pageSize } = event.detail;
            const startIdx = pageIndex * pageSize;
            const endIdx = startIdx + pageSize;
            deviceTable.data = window.allDeviceData.slice(startIdx, endIdx);
            setTimeout(applyStatusBadges, 50);
        });
    }
    
    // Advanced search toggle
    const advancedSearchButton = document.querySelector('forge-button:has(forge-icon[name="arrow_drop_down"])');
    const advancedSearchContainer = document.querySelector('.advanced-search-container');
    
    if (advancedSearchButton && advancedSearchContainer) {
        advancedSearchButton.addEventListener('click', function() {
            advancedSearchContainer.classList.toggle('visible');
            
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
});

// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (const [key, value] of params) {
        result[key] = value;
    }
    return result;
}

// Function to check if we're on the index2.html page
function isIndex2Page() {
    return window.location.pathname.endsWith('index2.html');
}

// Function to create an alerts-and-errors card for devices with error status
function createErrorCard(errorData) {
    // Generate error details
    const errorTime = errorData.lastCheckIn || '(unknown)';
    const errorMessage = 'Connection timeout - check network connection';
    
    return `
      <forge-card outlined class="alerts-and-errors-card" style="margin: 16px 0; background-color: var(--forge-theme-error-container-minimum);">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <forge-icon external external-type="standard" name="error" style="color: var(--forge-theme-error); margin-right: 8px;"></forge-icon>
          <h3 class="forge-typography--heading6" style="margin: 0; color: var(--forge-theme-error);">Device Error</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <forge-label-value>
            <span slot="label">Error message</span>
            <span slot="value" style="color: var(--forge-theme-error);">${errorMessage}</span>
          </forge-label-value>
          <forge-label-value>
            <span slot="label">Last error</span>
            <span slot="value">${errorTime}</span>
          </forge-label-value>
          <forge-label-value>
            <span slot="label">Resolution</span>
            <span slot="value">Please check the network connection and restart the device.</span>
          </forge-label-value>
          <div style="display: flex; gap: 8px; margin-top: 8px; justify-content: flex-end;">
            <forge-button variant="text">
              <forge-icon external external-type="standard" name="sync" slot="start"></forge-icon>
              Restart Device
            </forge-button>
            <forge-button variant="text">
              <forge-icon external external-type="standard" name="open_in_new" slot="start"></forge-icon>
              View Logs
            </forge-button>
          </div>
        </div>
      </forge-card>
    `;
}

// Set up error card for index2.html page
document.addEventListener('DOMContentLoaded', function() {
    // Only run this code on the index2.html page
    if (!isIndex2Page()) return;
    
    // Get device data from URL parameters
    const deviceData = getQueryParams();
    
    // Find the existing alerts-and-errors-card
    const existingErrorCard = document.querySelector('.alerts-and-errors-card');
    
    // Handle error card visibility based on device status
    if (deviceData.status === 'Error') {
        // If the device has Error status and there's already an error card,
        // we can either update it or leave it as is
        if (existingErrorCard) {
            // Option 1: Leave the existing card as is
            console.log('Using existing alerts-and-errors-card for Error device');
            
            // Option 2: Replace with our dynamic error card
            // const rightPanel = existingErrorCard.parentElement;
            // const errorCardContainer = document.createElement('div');
            // errorCardContainer.innerHTML = createErrorCard(deviceData);
            // rightPanel.replaceChild(errorCardContainer.firstElementChild, existingErrorCard);
        } else {
            // If there's no existing error card, add one
            const rightPanel = document.querySelector('.right-panel');
            if (rightPanel) {
                const errorCardContainer = document.createElement('div');
                errorCardContainer.innerHTML = createErrorCard(deviceData);
                rightPanel.insertBefore(errorCardContainer.firstElementChild, rightPanel.firstChild);
            }
        }
    } else {
        // If the device doesn't have Error status, remove any existing error card
        if (existingErrorCard) {
            existingErrorCard.remove();
        }
    }
});

// Row click for navigation (ignore clicks on expand icon)
deviceTable.addEventListener('forge-table-row-click', (event) => {
  if (event.detail.originalEvent?.target?.closest('forge-icon-button')) return;
  const rowData = event.detail.data;
  if (!rowData) return;
  const queryParams = new URLSearchParams(Object.entries(rowData));
  window.location.href = `index2.html?${queryParams.toString()}`;
});

  

  document.addEventListener('DOMContentLoaded', function() {
  const lastCheckinSelect = document.getElementById('last-checkin-select');
  const clearLastCheckin = document.getElementById('clear-last-checkin');
  const statusSelect = document.getElementById('status-select');
  const clearStatusSelect = document.getElementById('clear-status-select');

  if (clearLastCheckin && lastCheckinSelect) {
    clearLastCheckin.addEventListener('click', function(e) {
      e.stopPropagation();
      lastCheckinSelect.value = '';
      // Optionally, trigger a change event if your code listens for it
      lastCheckinSelect.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  if (clearStatusSelect && statusSelect) {
    clearStatusSelect.addEventListener('click', function(e) {
      e.stopPropagation();
      statusSelect.value = '';
      statusSelect.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
});