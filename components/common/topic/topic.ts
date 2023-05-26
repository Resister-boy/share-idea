export type Topic = {
  topic: string;
  id: number;
}

export type TopicMapType = {
  [topic: string]: number;
}

export const topics: Topic[] = [
  {
    "id": 1,
    "topic": "AI"
  },
  {
    "id": 2,
    "topic": "Healthcare"
  },
  {
    "id": 3,
    "topic": "Finance"
  },
  {
    "id": 4,
    "topic": "Publishing"
  },
  {
    "id": 5,
    "topic": "Blockchain"
  },
  {
    "id": 6,
    "topic": "FnB"
  },
  {
    "id": 7,
    "topic": "Fashion"
  },
  {
    "id": 8,
    "topic": "ECommerce"
  },
  {
    "id": 9,
    "topic": "Content"
  },
  {
    "id": 10,
    "topic": "Mobility"
  },
  {
    "id": 11,
    "topic": "Robotics"
  },
  {
    "id": 12,
    "topic": "IoT"
  },
  {
    "id": 13,
    "topic": "RealEstate"
  },
  {
    "id": 14,
    "topic": "Beauty"
  },
  {
    "id": 15,
    "topic": "Education"
  },
  {
    "id": 16,
    "topic": "Sass"
  }
]
   
export const TopicMap :TopicMapType = {
  "AI": 1,
  "Healthcare": 2,
  "Finance": 3,
  "Publishing": 4,
  "Blockchain": 5,
  "FnB": 6,
  "Fashion": 7,
  "E-Commerce": 8,
  "Content": 9,
  "Mobility": 10,
  "Robotics": 11,
  "IoT": 12,
  "Real Estate": 13,
  "Beauty": 14,
  "Education": 15,
  "Sass": 16
}