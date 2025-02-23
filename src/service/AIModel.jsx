import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Provide a complete JSON file, without any comments or instructions, containing placeholder data and Generate Travel Plan for Location: Las Vegas, for 4-5 Days for Family with a Luxury budget Give me a Hotels options list atleast 5 with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with full day plan with timestamp, placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating Time travel each of the location for 3 days with each day plan with best time to visit in complete JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "travelPlan": {\n    "location": "Las Vegas, NV",\n    "duration": "4 Days",\n    "budget": "Luxury",\n    "travelers": "Family",\n    "hotels": [\n      {\n        "hotelName": "The Bellagio",\n        "hotelAddress": "3600 S Las Vegas Blvd, Las Vegas, NV 89109",\n        "price": 500,\n        "hotelImageUrl": "https://example.com/bellagio.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1146,\n          "longitude": -115.1729\n        },\n        "rating": 4.8,\n        "description": "Luxury hotel with stunning fountains."\n      },\n      {\n        "hotelName": "The Venetian Resort Las Vegas",\n        "hotelAddress": "3355 S Las Vegas Blvd, Las Vegas, NV 89109",\n        "price": 450,\n        "hotelImageUrl": "https://example.com/venetian.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1205,\n          "longitude": -115.1728\n        },\n        "rating": 4.7,\n        "description": "Grand hotel with canals and gondolas."\n      },\n      {\n        "hotelName": "Wynn Las Vegas",\n        "hotelAddress": "3131 S Las Vegas Blvd, Las Vegas, NV 89109",\n        "price": 600,\n        "hotelImageUrl": "https://example.com/wynn.jpg",\n        "geoCoordinates": {\n          "latitude": 36.122,\n          "longitude": -115.171\n        },\n        "rating": 4.9,\n        "description": "Luxury hotel with high-end amenities."\n      },\n      {\n        "hotelName": "Four Seasons Hotel Las Vegas",\n        "hotelAddress": "3960 Las Vegas Blvd S, Las Vegas, NV 89119",\n        "price": 700,\n        "hotelImageUrl": "https://example.com/fourseasons.jpg",\n        "geoCoordinates": {\n          "latitude": 36.1032,\n          "longitude": -115.1726\n        },\n        "rating": 4.6,\n        "description": "Elegant hotel with exceptional service."\n      },\n      {\n        "hotelName": "The Cosmopolitan of Las Vegas",\n        "hotelAddress": "3708 Las Vegas Blvd S, Las Vegas, NV 89109",\n        "price": 550,\n        "hotelImageUrl": "https://example.com/cosmopolitan.jpg",\n        "geoCoordinates": {\n          "latitude": 36.116,\n          "longitude": -115.1735\n        },\n        "rating": 4.5,\n        "description": "Stylish hotel with a vibrant atmosphere."\n      }\n    ],\n    "itinerary": {\n      "day1": [\n        {\n          "time": "9:00 AM",\n          "placeName": "High Roller Observation Wheel",\n          "placeDetails": "Enjoy breathtaking views of the Las Vegas Strip.",\n          "placeImageUrl": "https://example.com/highroller.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1007,\n            "longitude": -115.1726\n          },\n          "ticketPricing": 35,\n          "rating": 4.5\n        },\n         {\n          "time": "11:00 AM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Explore stunning floral displays.",\n          "placeImageUrl": "https://example.com/bellagiogarden.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1146,\n            "longitude": -115.1729\n          },\n          "ticketPricing": 0,\n          "rating": 4.6\n        }\n      ],\n      "day2": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Grand Canyon West Rim",\n          "placeDetails": "Take a helicopter tour or drive to experience the breathtaking views.",\n          "placeImageUrl": "https://example.com/grandcanyon.jpg",\n          "geoCoordinates": {\n            "latitude": 36.0544,\n            "longitude": -114.0516\n          },\n          "ticketPricing": 200,\n          "rating": 5.0\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Caesars Palace",\n          "placeDetails": "Dinner at a fine dining restaurant, followed by a show.",\n          "placeImageUrl": "https://example.com/caesars.jpg",\n          "geoCoordinates": {\n            "latitude": 36.1125,\n            "longitude": -115.170\n          },\n          "ticketPricing": 150,\n          "rating": 4.4\n        }\n      ],\n      "day3": [\n        {\n          "time": "1:00 PM",\n          "placeName": "Seven Magic Mountains",\n          "placeDetails": "Visit this colorful art installation.",\n          "placeImageUrl": "https://example.com/sevenmagic.jpg",\n          "geoCoordinates": {\n            "latitude": 36.0434,\n            "longitude": -114.9996\n          },\n          "ticketPricing": 0,\n          "rating": 4.0\n        },\n         {\n          "time": "5:00 PM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "Explore shops and restaurants, with views of the High Roller.",\n          "placeImageUrl": "https://example.com/linq.jpg",\n          "geoCoordinates": {\n            "latitude": 36.099,\n            "longitude": -115.1703\n          },\n          "ticketPricing": 0,\n          "rating": 4.3\n        }\n      ],\n      "day4": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Pool Day at Wynn",\n          "placeDetails": "Relax and enjoy luxury pool amenities.",\n          "placeImageUrl": "https://example.com/wynnpool.jpg",\n          "geoCoordinates": {\n            "latitude": 36.122,\n            "longitude": -115.171\n          },\n          "ticketPricing": 0,\n          "rating": 4.7\n        }\n      ]\n    }\n  }\n}\n```\n',
        },
      ],
    },
  ],
});
