import AboutItem from "./AboutItem";
import "../styles/Reason.css";

export default function About() {
  return (
    <div id="about">
      <h4 className="reasontitle">Why KittyKnowhow?</h4>
      <AboutItem
        heading="Love for cats"
        details="As a cat lover who grew up with a family that hated cats I always sought the joy of owning a cat from my friends and random people online. I was alwasy excited to hear
      people's stories of all the silly things their cats were doing in the homes and all the trouble they were getting it. KittyKnowhow let's people share their crazy or even boring experiences
      with owning a cat so others may enjoy or even offer some advice."
      ></AboutItem>
      <AboutItem
        heading="Real life experiences"
        details="People who have kids know that all the kid care books and advice from professionals doesn not compare to the shared knowledge or experiences you
      obtain from other parents. Although parenting styles may differ there are certain components of a growing child's life that all parents can relate to. Having a cat will expose you to certain things the internet
      or your vet would never have even thought to be a problem. Imagine your cat swallows a medication of yours. Yes, you should definetly visit a vet but learning what happened in similar situations will keep you calm(or maybe frantic) as you drive to your vet.
      Basically you have an idea of the situation."
      ></AboutItem>
    </div>
  );
}
