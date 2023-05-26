import { Topic } from "@/components/common/topic/topic";

const isInclude = (topic: string, input: string): boolean => {
  let j = 0;
  let i = 0;
  while (i < topic.length) {
    if (topic[i] === input[j]) {
      i++;
      j++;
    } else i++;
  }
  if (j === input.length) return (true);
  return (false);
}

export const handleTopicByInput = (topics: Topic[], input: string): Topic[] => {
  let sortedTopics: Topic[] = [];

  for (let i = 0; i < topics.length; i++) {
    if (isInclude(topics[i].topic.toLowerCase(), input.toLowerCase())) {
      sortedTopics.push(topics[i]);
    }
  }
  return (sortedTopics);
}