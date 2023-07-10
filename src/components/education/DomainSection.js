import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./DomainSection.css";

function DomainSection({ domain }) {
  const language = useContext(LanguageContext);

  // Data for carbon emissions
  const carbonEmissions = {
    food: [
      { item: "Beef", emissions: "27 kg CO2e per kg" },
      { item: "Chicken", emissions: "6.9 kg CO2e per kg" },
      { item: "Rice", emissions: "2.7 kg CO2e per kg" },
      { item: "Cheese", emissions: "13.5 kg CO2e per kg" },
      { item: "Bread", emissions: "1.6 kg CO2e per loaf" },
      { item: "Pork", emissions: "7.7 kg CO2e per kg" },
      { item: "Potatoes", emissions: "0.3 kg CO2e per kg" },
      { item: "Salmon", emissions: "11.9 kg CO2e per kg" },
      { item: "Eggs", emissions: "4.8 kg CO2e per dozen" },
      { item: "Milk", emissions: "1.9 kg CO2e per liter" },
      { item: "Tomatoes", emissions: "2.1 kg CO2e per kg" },
      { item: "Onions", emissions: "0.4 kg CO2e per kg" },
      { item: "Carrots", emissions: "0.3 kg CO2e per kg" },
      { item: "Apples", emissions: "0.5 kg CO2e per kg" },
      { item: "Oranges", emissions: "0.6 kg CO2e per kg" },
      { item: "Bananas", emissions: "0.9 kg CO2e per kg" },
      { item: "Lettuce", emissions: "0.15 kg CO2e per head" },
      { item: "Strawberries", emissions: "1.4 kg CO2e per kg" },
      { item: "Blueberries", emissions: "4.4 kg CO2e per kg" },
      { item: "Cucumbers", emissions: "0.15 kg CO2e per kg" },
      { item: "Grapes", emissions: "2.8 kg CO2e per kg" },
      { item: "Watermelon", emissions: "0.4 kg CO2e per kg" },
      { item: "Pineapple", emissions: "1.6 kg CO2e per kg" },
      { item: "Avocado", emissions: "2.0 kg CO2e per kg" },
      { item: "Spinach", emissions: "0.2 kg CO2e per kg" },
      { item: "Cabbage", emissions: "0.15 kg CO2e per kg" },
      { item: "Bell Peppers", emissions: "2.0 kg CO2e per kg" },
      { item: "Zucchini", emissions: "0.5 kg CO2e per kg" },
      { item: "Mango", emissions: "0.8 kg CO2e per kg" },
      { item: "Peaches", emissions: "0.7 kg CO2e per kg" },
      { item: "Pears", emissions: "0.5 kg CO2e per kg" },
      { item: "Cauliflower", emissions: "0.6 kg CO2e per kg" },
      { item: "Broccoli", emissions: "0.6 kg CO2e per kg" },
      { item: "Mushrooms", emissions: "1.2 kg CO2e per kg" }
      // Add more food items
    ],
    transport: [
      { item: "Car", emissions: "2.5 kg CO2e per km" },
      { item: "Bicycle", emissions: "0 kg CO2e" },
      { item: "Bus", emissions: "1.5 kg CO2e per km" },
      { item: "Train", emissions: "0.8 kg CO2e per km" },
      { item: "Motorcycle", emissions: "2 kg CO2e per km" },
      { item: "Electric Scooter", emissions: "0.5 kg CO2e per km" },
      { item: "Walking", emissions: "0 kg CO2e" },
      { item: "Tram", emissions: "0.4 kg CO2e per km" },
      { item: "Subway", emissions: "0.6 kg CO2e per km" },
      { item: "Ferry", emissions: "0.7 kg CO2e per km" },
      { item: "Electric Car", emissions: "0 kg CO2e per km" },
      { item: "Hybrid Car", emissions: "1.8 kg CO2e per km" },
      { item: "Van", emissions: "2.2 kg CO2e per km" },
      { item: "Truck", emissions: "3.5 kg CO2e per km" },
      { item: "Airplane (short-haul)", emissions: "0.2 kg CO2e per km" },
      { item: "Airplane (long-haul)", emissions: "0.15 kg CO2e per km" },
      { item: "Scooter", emissions: "1.5 kg CO2e per km" },
      { item: "Segway", emissions: "0.3 kg CO2e per km" },
      { item: "Electric Skateboard", emissions: "0 kg CO2e per km" },
      { item: "Rollerblades", emissions: "0 kg CO2e per km" },
      { item: "Carpooling", emissions: "varies based on occupancy" },
      { item: "Cruise Ship", emissions: "0.4 kg CO2e per km" },
      { item: "Hot Air Balloon", emissions: "0 kg CO2e per km" },
      { item: "Jet Ski", emissions: "1.7 kg CO2e per km" },
      { item: "Horse", emissions: "0 kg CO2e per km" },
      { item: "Sailing Boat", emissions: "0 kg CO2e per km" },
      { item: "Helicopter", emissions: "0.4 kg CO2e per km" },
      { item: "Canoe", emissions: "0 kg CO2e per km" },
      { item: "Rocket", emissions: "varies based on size" },
      { item: "Hang Glider", emissions: "0 kg CO2e per km" },
      { item: "Paraglider", emissions: "0 kg CO2e per km" },
      { item: "Golf Cart", emissions: "0.7 kg CO2e per km" },
      { item: "Skateboard", emissions: "0 kg CO2e per km" },
      { item: "Motorboat", emissions: "4.5 kg CO2e per km" },
      { item: "Trolleybus", emissions: "0.8 kg CO2e per km" },
      { item: "Motorized Wheelchair", emissions: "0.5 kg CO2e per km" },
      { item: "Snowmobile", emissions: "3.5 kg CO2e per km" },
      { item: "Monster Truck", emissions: "6.5 kg CO2e per km" },
      { item: "Jetpack", emissions: "0.6 kg CO2e per km" },
      { item: "Rideshare (Uber, Lyft)", emissions: "varies based on vehicle" },
      { item: "Hitchhiking", emissions: "0 kg CO2e per km" },
      { item: "Self-Driving Car", emissions: "varies based on vehicle" },
      { item: "Electric Unicycle", emissions: "0 kg CO2e per km" },
      { item: "Transporter Pad", emissions: "0 kg CO2e per km" },
      { item: "Hoverboard", emissions: "0 kg CO2e per km" }
      // Add more transport items
    ],
    homeAppliances: [
      { item: "Refrigerator", emissions: "100 kg CO2e per year" },
      { item: "Television", emissions: "50 kg CO2e per year" },
      { item: "Washing Machine", emissions: "80 kg CO2e per year" },
      { item: "Air Conditioner", emissions: "200 kg CO2e per year" },
      { item: "Clothes Dryer", emissions: "180 kg CO2e per year" },
      { item: "Oven", emissions: "90 kg CO2e per year" },
      { item: "Dishwasher", emissions: "70 kg CO2e per year" },
      { item: "Microwave", emissions: "25 kg CO2e per year" },
      { item: "Vacuum Cleaner", emissions: "15 kg CO2e per year" },
      { item: "Water Heater", emissions: "120 kg CO2e per year" },
      { item: "Toaster", emissions: "5 kg CO2e per year" },
      { item: "Blender", emissions: "8 kg CO2e per year" },
      { item: "Air Purifier", emissions: "30 kg CO2e per year" },
      { item: "Heating System", emissions: "150 kg CO2e per year" },
      { item: "Coffeemaker", emissions: "10 kg CO2e per year" },
      { item: "Hair Dryer", emissions: "5 kg CO2e per year" },
      { item: "Iron", emissions: "7 kg CO2e per year" },
      { item: "Electric Kettle", emissions: "12 kg CO2e per year" },
      { item: "Fan", emissions: "20 kg CO2e per year" },
      { item: "Rice Cooker", emissions: "18 kg CO2e per year" },
      { item: "Food Processor", emissions: "9 kg CO2e per year" },
      { item: "Slow Cooker", emissions: "14 kg CO2e per year" },
      { item: "Bread Maker", emissions: "16 kg CO2e per year" },
      { item: "Juicer", emissions: "11 kg CO2e per year" },
      { item: "Steam Iron", emissions: "6 kg CO2e per year" },
      { item: "Electric Grill", emissions: "13 kg CO2e per year" },
      { item: "Electric Toothbrush", emissions: "3 kg CO2e per year" },
      { item: "Dehumidifier", emissions: "28 kg CO2e per year" },
      { item: "Air Fryer", emissions: "22 kg CO2e per year" },
      { item: "Humidifier", emissions: "24 kg CO2e per year" },
      { item: "Electric Shaver", emissions: "4 kg CO2e per year" },
      { item: "Electric Blanket", emissions: "19 kg CO2e per year" },
      { item: "Electric Fireplace", emissions: "26 kg CO2e per year" },
      { item: "Electric Mixer", emissions: "10 kg CO2e per year" },
      { item: "Toothbrush Charger", emissions: "2 kg CO2e per year" },
      { item: "Electric Can Opener", emissions: "7 kg CO2e per year" },
      { item: "Electric Knife", emissions: "9 kg CO2e per year" },
      { item: "Handheld Blender", emissions: "8 kg CO2e per year" },
      { item: "Electric Skillet", emissions: "17 kg CO2e per year" },
      { item: "Electric Griddle", emissions: "15 kg CO2e per year" },
      { item: "Electric Wok", emissions: "20 kg CO2e per year" },
      { item: "Electric Mixer", emissions: "11 kg CO2e per year" },
      { item: "Electric Scale", emissions: "6 kg CO2e per year" },
      { item: "Electric Heater", emissions: "120 kg CO2e per year" },
      { item: "Electric Fireplace", emissions: "80 kg CO2e per year" },
      { item: "Electric Grill", emissions: "90 kg CO2e per year" },
      { item: "Electric Fan", emissions: "70 kg CO2e per year" }
      // Add more home appliances
    ],
    clothing: [
      { item: "T-Shirt", emissions: "5 kg CO2e" },
      { item: "Jeans", emissions: "15 kg CO2e" },
      { item: "Dress", emissions: "10 kg CO2e" },
      { item: "Sweater", emissions: "8 kg CO2e" },
      { item: "Coat", emissions: "12 kg CO2e" },
      { item: "Shorts", emissions: "6 kg CO2e" },
      { item: "Skirt", emissions: "7 kg CO2e" },
      { item: "Jacket", emissions: "10 kg CO2e" },
      { item: "Shirt", emissions: "6 kg CO2e" },
      { item: "Blouse", emissions: "8 kg CO2e" },
      { item: "Pants", emissions: "9 kg CO2e" },
      { item: "Sweatshirt", emissions: "7 kg CO2e" },
      { item: "Hoodie", emissions: "9 kg CO2e" },
      { item: "Leggings", emissions: "6 kg CO2e" },
      { item: "Suit", emissions: "14 kg CO2e" },
      { item: "Blazer", emissions: "11 kg CO2e" },
      { item: "Vest", emissions: "7 kg CO2e" },
      { item: "Sweatpants", emissions: "8 kg CO2e" },
      { item: "Cardigan", emissions: "9 kg CO2e" },
      { item: "Top", emissions: "6 kg CO2e" },
      { item: "Polo Shirt", emissions: "7 kg CO2e" },
      { item: "Tank Top", emissions: "5 kg CO2e" },
      { item: "Jumpsuit", emissions: "12 kg CO2e" },
      { item: "Sweat Shorts", emissions: "6 kg CO2e" },
      { item: "Trousers", emissions: "9 kg CO2e" },
      { item: "Blouse", emissions: "7 kg CO2e" },
      { item: "Maxi Dress", emissions: "13 kg CO2e" },
      { item: "Pullover", emissions: "8 kg CO2e" },
      { item: "Crop Top", emissions: "5 kg CO2e" },
      { item: "Swimsuit", emissions: "6 kg CO2e" },
      { item: "Hooded Sweatshirt", emissions: "9 kg CO2e" },
      { item: "Button-down Shirt", emissions: "7 kg CO2e" },
      { item: "Pajamas", emissions: "6 kg CO2e" },
      { item: "Tunic", emissions: "8 kg CO2e" },
      { item: "Sweat Suit", emissions: "10 kg CO2e" },
      { item: "Polo", emissions: "6 kg CO2e" },
      { item: "Jersey", emissions: "7 kg CO2e" },
      { item: "Dungarees", emissions: "11 kg CO2e" },
      { item: "Romper", emissions: "9 kg CO2e" },
      { item: "Kimono", emissions: "8 kg CO2e" },
      { item: "Chinos", emissions: "7 kg CO2e" },
      { item: "V-neck Sweater", emissions: "10 kg CO2e" },
      { item: "Cropped Pants", emissions: "7 kg CO2e" },
      { item: "Denim Jacket", emissions: "12 kg CO2e" },
      { item: "Sarong", emissions: "6 kg CO2e" },
      { item: "Blouse", emissions: "8 kg CO2e" },
      { item: "Harem Pants", emissions: "9 kg CO2e" },
      { item: "Peacoat", emissions: "11 kg CO2e" },
      { item: "Pencil Skirt", emissions: "8 kg CO2e" }
      // Add more clothing items
    ],
    electricity: [
      { item: "Incandescent Bulb", emissions: "2 kg CO2e per hour" },
      { item: "LED Bulb", emissions: "0.5 kg CO2e per hour" },
      {
        item: "Compact Fluorescent Lamp (CFL)",
        emissions: "1 kg CO2e per hour"
      },
      { item: "Refrigerator", emissions: "5 kg CO2e per hour" },
      { item: "Air Conditioner", emissions: "15 kg CO2e per hour" },
      { item: "Television", emissions: "3 kg CO2e per hour" },
      { item: "Computer", emissions: "2 kg CO2e per hour" },
      { item: "Laptop", emissions: "1.5 kg CO2e per hour" },
      { item: "Mobile Phone Charger", emissions: "0.1 kg CO2e per hour" },
      { item: "Electric Stove", emissions: "8 kg CO2e per hour" },
      { item: "Washing Machine", emissions: "4 kg CO2e per hour" },
      { item: "Dishwasher", emissions: "3.5 kg CO2e per hour" },
      { item: "Clothes Dryer", emissions: "5 kg CO2e per hour" },
      { item: "Electric Oven", emissions: "6 kg CO2e per hour" },
      { item: "Water Heater", emissions: "7 kg CO2e per hour" },
      { item: "Microwave Oven", emissions: "2.5 kg CO2e per hour" },
      { item: "Hair Dryer", emissions: "1.5 kg CO2e per hour" },
      { item: "Electric Kettle", emissions: "0.8 kg CO2e per hour" },
      { item: "Toaster", emissions: "0.5 kg CO2e per hour" },
      { item: "Fan", emissions: "3 kg CO2e per hour" }
    ]
  };

  // Retrieve translations based on selected language
  const translations = {
    en: {
      food: "Food Domain",
      transport: "Transport Domain",
      homeAppliances: "Home Appliances Domain",
      clothing: "Clothing Domain",
      electricity: "Electricity Domain",
      item: "Item",
      emissions: "Emissions"
    },
    hi: {
      food: "भोजन डोमेन",
      transport: "परिवहन डोमेन",
      homeAppliances: "गृह उपकरण डोमेन",
      clothing: "कपड़ा डोमेन",
      electricity: "बिजली डोमेन",
      item: "आइटम",
      emissions: "एमिशन"
    },
    zh: {
      food: "食物领域",
      transport: "交通领域",
      homeAppliances: "家电领域",
      clothing: "服装领域",
      electricity: "电力领域",
      item: "物品",
      emissions: "排放量"
    },
    ms: {
      food: "Domain Makanan",
      transport: "Domain Pengangkutan",
      homeAppliances: "Domain Perkakasan Rumah",
      clothing: "Domain Pakaian",
      electricity: "Domain Elektrik",
      item: "Item",
      emissions: "Emisi"
    }
  };

  return (
    <div className="domain-section">
      <h2>{translations[language][domain]}</h2>
      <table className="emissions-table">
        <thead>
          <tr>
            <th>{translations[language].item}</th>
            <th>{translations[language].emissions}</th>
          </tr>
        </thead>
        <tbody>
          {carbonEmissions[domain].map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.emissions}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Suggestions on reducing carbon footprint */}
    </div>
  );
}

export default DomainSection;
