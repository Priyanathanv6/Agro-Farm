 // JavaScript for dynamic district dropdown based on selected state
  const stateDropdown = document.getElementById('state');
  const districtDropdown = document.getElementById('district');

  const districts = {
   andhraPradesh: [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa", 
    "Sri Potti Sriramulu Nellore", "West Godavari", "Kakinada", "Srikakulam", "Vizianagaram"
  ],
  arunachalPradesh: [
    "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lower Dibang Valley", "Lower Siang", "Namsai", "Pakke Kessang",
    "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"
  ],
  assam:[
    "Baksa", "Barpeta", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat",
    "Kamrup Metropolitan", "Karimganj", "Karbi Anglong", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur"
  ],
  bihar:[
    "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui",
    "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur"
  ],
  chhattisgarh:[
    "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham",
    "Kanker", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur"
  ],
  goa:[
    "North Goa", "South Goa"
  ],
    gujarat:[
        "Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "Dangs", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch",
        "Kheda", "Mahisagar", "Mehsana", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar"
    ],
    haryana:[
        "Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh",
        "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat"
    ],
    himachalPradesh:[
        "Bilaspur", "Chamba", "Hamirpur", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"
    ],
    jharkhand:[
        "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara",
        "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ranchi", "Sahibganj", "Seraikela Kharsawan"
    ],
    karnataka:[
        "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapura", "Chikkamagaluru", "Chitradurga",
        "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya"
    ],
    kerala:[
        "Alappuzha", "Ernakulam", "Idukki", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
        "Thiruvananthapuram", "Thrissur", "Wayanad"
    ],
    madhyaPradesh:[
        "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",
        "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda"
    ],
    maharashtra:[
        "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli",
        "Gondia", "Hingoli", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nashik"
    ],
    manipur:[
        "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi",
        "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"
    ],
    meghalaya:[
        "East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Khasi Hills"
    ],
    mizoram:[
        "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"
    ],
    nagaland:[
        "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"
    ],
    odisha:[
        "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Bolangir", "Dhenkanal", "Ganjam", "Ganjam", "Jagatsinghpur",
        "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khurda", "Koraput", "Malkangiri"
    ],
    punjab:[
        "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar",
        "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar"
    ],
    rajasthan:[
        "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh",
        "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar"
    ],
    sikkim:[
        "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"
    ],
    tamilnadu: [
        "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
        "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanniyakumari", "Karur",
        "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal",
        "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet",
        "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi",
        "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur",
        "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"
      ],
    telangana:[
        "Adilabad", "Hyderabad", "Karimnagar", "Khammam", "Mahabubnagar", "Medak", "Nalgonda", "Nizamabad", "Rangareddy",
        "Warangal"
    ],
    tripura:[
        "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"
    ],
    uttarakhand:[
        "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
        "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
    ],
    uttarPradesh:[
        "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Badaun", "Baghpat",
        "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bijnor", "Bulandshahr"
    ],
    westBengal:[
        "Alipurduar", "Bankura", "Birbhum", "Burdwan", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly",
        "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Koch Bihar", "Malda", "Murshidabad", "Nadia",
        "North 24 Parganas", "Paschim Bardhaman", "Purba Bardhaman", "Purulia", "South 24 Parganas"
    ],
    andamanAndNicobar: [
        "Nicobar", "North and Middle Andaman", "South Andaman"
      ],
    chandigarh: [
        "Chandigarh"
      ],
    dadraAndNagarHaveli: [
        "Dadra and Nagar Haveli"
      ],
    damanAndDiu: [
        "Daman", "Diu"
      ],
    delhi: [
        "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi",
        "South East Delhi", "South West Delhi", "West Delhi"
      ],
    lakshadweep: [
        "Lakshadweep"
      ],
    puducherry: [
        "Karaikal", "Mahe", "Puducherry", "Yanam"
      ],
    jammuAndKashmir: [
        "Anantnag", "Bandipora", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam",
        "Poonch", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"
      ],
    ladakh: [
        "Kargil", "Leh"
      ]
  };

  stateDropdown.addEventListener('change', function () {
    const selectedState = stateDropdown.value;
    districtDropdown.innerHTML = '<option value="">--Select District--</option>'; // Reset districts
    if (selectedState && districts[selectedState]) {
      districts[selectedState].forEach(district => {
        const option = document.createElement('option');
        option.value = district.toLowerCase().replace(/\s/g, '');
        option.textContent = district;
        districtDropdown.appendChild(option);
      });
    }
  });





// document.addEventListener("DOMContentLoaded", () => {
//   const productUploadForm = document.getElementById("productUploadForm");
//   const productCartContainer = document.getElementById("product-cart-container");

//   const form = document.getElementById("farmerForm");
//   const farmerList = document.getElementById("farmerList");
//   const searchInput = document.getElementById("searchInput");

//   const menuToggle = document.getElementById("menu-toggle");
//   const navbarLinks = document.getElementById("navbar-links");
//   menuToggle.addEventListener("click", () => {
//     navbarLinks.classList.toggle("active");
//   });



//   // JavaScript for dynamic district dropdown based on selected state
//   const stateDropdown = document.getElementById('state');
//   const districtDropdown = document.getElementById('district');

//   const districts = {
//    const districts = {

   
// };

//   stateDropdown.addEventListener('change', function () {
//     const selectedState = stateDropdown.value;
//     districtDropdown.innerHTML = '<option value="">--Select District--</option>'; // Reset districts
//     if (selectedState && districts[selectedState]) {
//       districts[selectedState].forEach(district => {
//         const option = document.createElement('option');
//         option.value = district.toLowerCase().replace(/\s/g, '');
//         option.textContent = district;
//         districtDropdown.appendChild(option);
//       });
//     }
//   });

//   // Toast notification logic (example)
//   const form = document.getElementById('form-group');
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // Show toast notification
//     const toast = document.getElementById('toast');
//     toast.classList.add('show');
//     setTimeout(() => {
//       toast.classList.remove('show');
//     }, 3000);
//   });


   
// // Example of the States and Districts data structure (Add all your states and districts here)

//   // Populate the districts based on the selected state
//   stateSelect.addEventListener("change", () => {
//     const selectedState = stateSelect.value;
//     const districts = statesAndDistricts[selectedState] || [];
//     districtSelect.innerHTML = districts.map(district => `<option value="${district}">${district}</option>`).join('');
//   });

//   // Product upload form submission
//   productUploadForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(productUploadForm);
//     // Handle product data here (save to the database or display in product cart)
//     const product = {
//       name: formData.get("product-name"),
//       category: formData.get("product-category"),
//       price: formData.get("product-price"),
//       description: formData.get("product-description"),
//       image: formData.get("product-image")
//     };

//     const productItem = document.createElement("div");
//     productItem.innerHTML = `
//       <h3>${product.name}</h3>
//       <p>Category: ${product.category}</p>
//       <p>Price: ₹${product.price}</p>
//       <p>Description: ${product.description}</p>
//       <img src="${URL.createObjectURL(product.image)}" alt="${product.name}" width="100">
//     `;
//     productCartContainer.appendChild(productItem);
//   });
// });


//   // Populate Districts based on selected State
//   stateSelect.addEventListener("change", () => {
//     const selectedState = stateSelect.value;
//     const districts = statesAndDistricts[selectedState] || [];

//     districtSelect.innerHTML = "<option value=''>Select District</option>";
//     districts.forEach(district => {
//       const option = document.createElement("option");
//       option.value = district;
//       option.textContent = district;
//       districtSelect.appendChild(option);
//     });
//   });



//   /*fetch details of farmers */

//   window.addEventListener("DOMContentLoaded", () => {
//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   const container = document.getElementById("productList");

//   products.forEach(product => {
//     const card = document.createElement("div");
//     card.className = "product-card";
//     card.innerHTML = `
//       <img src="${product.image}" alt="${product.productName}" />
//       <h3>${product.productName}</h3>
//       <p>By: ${product.farmerName}</p>
//       <p>Price: ₹${product.price}</p>
//       <p>Harvest Date: ${product.harvestDate}</p>
//       <p>Land Area: ${product.landArea}</p>
//       <p>Transport: ${product.transport}</p>
//     `;
//     container.appendChild(card);
//   });
// });


allProducts.forEach(product => {
  const productItem = document.createElement("div");
  productItem.innerHTML = `
    <h3>${product.productName}</h3>
    <p>Farmer: ${product.farmerName}</p>
    <p>Price: ₹${product.price}</p>
    <p>Transport: ${product.transport}</p>
    <p>Harvest Date: ${product.harvestDate}</p>
    <p>Land Area: ${product.landArea}</p>
    <img src="${product.image}" alt="${product.productName}" width="100">
  `;
  productCartContainer.appendChild(productItem);
});
