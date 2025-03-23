

const mcqs = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
    answer: "Islamabad"
  },
  {
    question: "Who is known as the 'Father of Pakistan'?",
    options: ["Liaquat Ali Khan", "Allama Iqbal", "Quaid-e-Azam", "Benazir Bhutto"],
    answer: "Quaid-e-Azam"
  },
  {
    question: "Which is the largest continent by area?",
    options: ["Europe", "Africa", "Asia", "North America"],
    answer: "Asia"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "What is the national animal of Pakistan?",
    options: ["Lion", "Markhor", "Tiger", "Deer"],
    answer: "Markhor"
  },
  {
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who discovered gravity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Thomas Edison"],
    answer: "Isaac Newton"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "English"],
    answer: "Urdu"
  },
  {
    question: "Which is the smallest ocean in the world?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Arctic"
  },
  {
    question: "Who wrote the national anthem of Pakistan?",
    options: ["Allama Iqbal", "Hafeez Jalandhari", "Faiz Ahmed Faiz", "Nasir Kazmi"],
    answer: "Hafeez Jalandhari"
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    answer: "100°C"
  },
  {
    question: "Which is the highest mountain in the world?",
    options: ["K2", "Mount Everest", "Nanga Parbat", "Kilimanjaro"],
    answer: "Mount Everest"
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    options: ["Liaquat Ali Khan", "Zulfikar Ali Bhutto", "Ayub Khan", "Benazir Bhutto"],
    answer: "Liaquat Ali Khan"
  },
  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    answer: "Thermometer"
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Germany", "France", "UK", "Italy"],
    answer: "France"
  },
  {
    question: "What is the chemical symbol of Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answer: "Au"
  },
  {
    question: "Which is the currency of Pakistan?",
    options: ["Rupee", "Taka", "Riyal", "Dinar"],
    answer: "Rupee"
  },
  {
    question: "What is the capital of China?",
    options: ["Shanghai", "Hong Kong", "Beijing", "Guangzhou"],
    answer: "Beijing"
  },
  {
    question: "Which is the hottest planet in the Solar System?",
    options: ["Mars", "Mercury", "Venus", "Jupiter"],
    answer: "Venus"
  },
  {
    question: "Which is the national sport of Pakistan?",
    options: ["Cricket", "Hockey", "Football", "Squash"],
    answer: "Hockey"
  },
  {
    question: "How many bones are in the human body?",
    options: ["200", "206", "212", "218"],
    answer: "206"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan"
  },
  {
    question: "What is the longest railway system in the world?",
    options: ["Indian Railways", "Trans-Siberian Railway", "Union Pacific Railroad", "China Railway"],
    answer: "Trans-Siberian Railway"
  },
  {
    question: "Which desert is the largest in the world?",
    options: ["Thar", "Gobi", "Sahara", "Karakum"],
    answer: "Sahara"
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Kangaroo"],
    answer: "Cheetah"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Which is the world's most spoken language?",
    options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
    answer: "Mandarin Chinese"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "Which country won the first FIFA World Cup?",
    options: ["Brazil", "Argentina", "Uruguay", "Germany"],
    answer: "Uruguay"
  },
  {
    question: "What is the chemical formula of water?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    answer: "H2O"
  },
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["Japan", "India", "China", "South Korea"],
    answer: "China"
  },
  {
    question: "Which vitamin is produced by sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["4", "5", "6", "7"],
    answer: "6"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Who was the first man to step on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
    answer: "Neil Armstrong"
  },
  {
    question: "Which country is known as the Land of the Pharaohs?",
    options: ["Greece", "Egypt", "Mexico", "India"],
    answer: "Egypt"
  },
  {
    question: "Which is the smallest country in the world?",
    options: ["Malta", "Monaco", "Vatican City", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: "Ottawa"
  },
  {
    question: "Which ocean is the largest by surface area?",
    options: ["Indian", "Pacific", "Atlantic", "Arctic"],
    answer: "Pacific"
  },
  {
    question: "Which gas do plants absorb from the air?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who was the first president of the United States?",
    options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    answer: "George Washington"
  },
  {
    question: "Which is the longest river in Pakistan?",
    options: ["Chenab", "Ravi", "Jhelum", "Indus"],
    answer: "Indus"
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury"
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Gobi", "Sahara", "Antarctic", "Arabian"],
    answer: "Antarctic"
  },
  {
    question: "What is the name of Pakistan's national flower?",
    options: ["Rose", "Sunflower", "Jasmine", "Lily"],
    answer: "Jasmine"
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
    answer: "Albert Einstein"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Iron", "Gold", "Diamond", "Platinum"],
    answer: "Diamond"
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    answer: "Heart"
  },
  {
    question: "Which is the national bird of Pakistan?",
    options: ["Peacock", "Chukar", "Eagle", "Parrot"],
    answer: "Chukar"
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    answer: "Lion"
  },
  {
    question: "Which country is famous for pizza and pasta?",
    options: ["Spain", "France", "Italy", "Greece"],
    answer: "Italy"
  },
  {
    question: "Which is the largest island in the world?",
    options: ["Greenland", "Australia", "Madagascar", "Borneo"],
    answer: "Greenland"
  }
];

export default mcqs