import './App.css';
import {useState} from 'react';
import bears from './assets/Bears.jpeg';
import capybara from './assets/Capybara.jpeg';
import deer from './assets/Deer.jpeg';
import dog from './assets/Dog.jpeg';
import hedgehog from './assets/Hedgehog.jpeg';
import horse from './assets/Horse.jpeg';
import koala from './assets/Koala.jpeg';
import lion from './assets/Lion.jpeg';
import otter from './assets/Otter.jpeg';
import racoon from './assets/Racoon.jpeg';
import redpanda from './assets/Red Panda.jpeg';
import rhino from './assets/Rhino.jpeg';
import shark from './assets/Shark.jpeg';
import sheep from './assets/Sheep.jpeg';
import sloth from './assets/Sloth.jpeg';
import tiger from './assets/Tiger.jpeg';



const App = () => {
  const [isFront,setFront] = useState(true);
  const Flip = () => setFront(!isFront);
  const animals = [
    {
      name: 'Bear',
      image: bears,
      facts: 'Fun Fact: There are eight bear species in the world. The American black bear, the Asiatic black bear, the brown bear, the giant panda, the polar bear, the sloth bear, the spectacled bear, and the sun bear'
    },
    {
      name: 'Capybara',
      image: capybara,
      facts: 'Fun Fact: Capybaras are the world\'s largest living rodent.'
    },
    {
      name: 'Deer',
      image: deer,
      facts: 'Fun Fact: Only male deer grow antlers, which are shed each year.'
    },
    {
      name: 'Dog',
      image: dog,
      facts: 'Fun Fact: They only sweat from their paws, and have to cool down by panting.'
    },
    {
      name: 'Hedgehog',
      image: hedgehog,
      facts: 'Fun Fact: A hedgehog has between 5000 and 7000 quills!'
    },
    {
      name: 'Horse',
      image: horse,
      facts: 'Fun Fact: Horses can sleep standing up and have nearly 360-degree field of vision.'
    },
    {
      name: 'Koala',
      image: koala,
      facts: 'Fun Fact: The world Koala means \' no drink\' in australia. It is really interesting since Koala\'s main water intake comes from eating fresh eucalyptus leaves.'
    },
    {
      name: 'Lion',
      image: lion,
      facts: 'Fun Fact: Nearly all wild lions live in Africa, but one small population exists elsewhere.'
    },
    {
      name: 'Otter',
      image: otter,
      facts: 'Fun Fact: River otters can hold their breath for up to 8 minutes while under water.'
    },
    {
      name: 'Racoon',
      image: racoon,
      facts: 'Fun Fact: Raccoons live an average of 5 years in the wild.'
    },
    {
      name: 'Red Panda',
      image: redpanda,
      facts: 'Fun Fact: Red Pandas Are The First Panda. Red Pandas Are Kinda like Cats. Red Panda\'s Have Six Digits on their Front Paws.'
    },
    {
      name: 'Rhino',
      image: rhino,
      facts: 'Fun Fact: There are 5 species of Rhino. Black and White rhinos in Africa and the Greater one-horned, Sumatran and Javan rhinos in Asia.'
    },
    {
      name: 'Shark',
      image: shark,
      facts: 'Fun Fact: Sharks do not have bones. Shark skin feels similar to sandpaper.'
    },
    {
      name: 'Sheep',
      image: sheep,
      facts: 'Fun Fact: Sheep, like goats, have rectangular pupils. Sheep do not have teeth in their upper front jaw.'
    },
    {
      name: 'Sloth',
      image: sloth,
      facts: 'Fun Fact: Everything is sluggish and slow-moving, even food digestion.'
    },
    {
      name: 'Tiger',
      image: tiger,
      facts: 'Fun Fact: Tigers have soft toe pads which help them walk silently through their habitat.'
    }
  ];

  const [index, setCount] = useState(0);
  const updateCount = () => {
    // Calculate the next index
    const nextIndex = (index + 1) % animals.length;
    setCount(nextIndex);
    setFront(true); // Reset the card to the front when clicking "Next"
  };
  
  return (
    <div className="App">
      <h1>Guess The Animal</h1>
      <h3>Can you guess the animal in the pictures? Lets find out!</h3>
      <div id = "flipcard">
        <div id="card" className = {isFront ? '' : 'flipped'} onClick={Flip}>
          <div id="backcard">
            <h1>{animals[index].name}</h1>
            <p>{animals[index].facts}</p>
          </div>
          <div id="frontcard">
            <img src={animals[index].image} alt="Bear"/>
          </div>
        </div>
      </div>
      <button onClick={updateCount}>Next</button>
    </div>
  )
}

export default App
