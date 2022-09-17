export { encrypt, decrypt, compare, } from './app';
import { encrypt, decrypt, compare, } from './app';

const aSampleObject = {
  name: 'John',
  age: 30,
  language: 'New York',
  country: 'USA',
  address: {
    street: 'Main Street',
    number: 123,
  },
};
const anEnglishStory =
  "Mohandas Karamchand Gandhi (/ˈɡɑːndi, ˈɡændi/;[3] GAHN-dee; 2 October 1869 – 30 January 1948) was an Indian lawyer,[4] anti-colonial nationalist[5] and political ethicist[6] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule,[7] and to later inspire movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: 'great-souled', 'venerable'), first applied to him in 1914 in South Africa, is now used throughout the world.[8][9] Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination. Assuming leadership of the Indian National Congress in 1921, Gandhi led nationwide campaigns for easing poverty, expanding women's rights, building religious and ethnic amity, ending untouchability, and, above all, achieving swaraj or self-rule. Gandhi adopted the short dhoti woven with hand-spun yarn as a mark of identification with India's rural poor. He began to live in a self-sufficient residential community, to eat simple food, and undertake long fasts as a means of both introspection and political protest. Bringing anti-colonial nationalism to the common Indians, Gandhi led them in challenging the British-imposed salt tax with the 400 km (250 mi) Dandi Salt March in 1930 and in calling for the British to quit India in 1942. He was imprisoned many times and for many years in both South Africa and India.";
const sampleArray = [
  'John',
  'Peter',
  'Sally',
  'Jane',
  'Mark',
  'Bob',
  'Alice',
  'Marry',
  'Tom',
  'Jerry',
];
let encrypted = encrypt(sampleArray, 'my-secret')
console.log(encrypted);
const enS="blacard#Kpio#-#Qfufs#-#Tbmmz#-#Kbof#-#Nbsl#-#Cpc#-#Bmjdf#-#Nbssz#-#Upn#-#Kfssz#^"
console.log("ans", decrypt(enS, 'my-secret'))
