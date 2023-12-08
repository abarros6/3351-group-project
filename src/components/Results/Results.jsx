import React from "react";
import bird from '../../assets/bird.jpeg'
import cat from '../../assets/cat.jpeg'
import dog from '../../assets/dog.jpeg'
import fish from '../../assets/fish.jpeg'
import smallPet from '../../assets/smallPet.jpeg'
import resultsCat from "../../assets/resultsCat.jpeg"
import './Results.scss'



const Results = (props) => {

    const birdResult = `
    If you’re looking for a fun, charming, dynamic companion, 
    make a bird your new BFF. While all birds need socialization, 
    mental stimulation and veterinary care, some species—such as conures 
    and African greys—are extremely smart and require the specialized 
    care of an experienced, dedicated owner. Plus, some species of parrots, 
    including most macaws, can live upwards of 60 years in captivity. If you’re 
    new to birds, consider a more “beginner-friendly” pet such as a budgie, canary or finch.`

    const smallResult = `
    Small furry friends, such as rabbits, hamsters, gerbils, mice 
    and guinea pigs, can offer a lot of love in a tiny package. And 
    if you prefer scales to fur, the same goes for reptiles like 
    geckos and bearded dragons. As fans of these species will tell 
    you, these little guys have big personalities, and they’re relatively 
    easy to care for on a daily basis.  Just keep in mind that there’s no 
    such thing as a “starter pet.” Small pets still require socialization,
    engaging habitats and daily care. Parents, especially, should use caution: 
    Due to the risk of salmonella infection, children under 5 should not handle 
    reptiles, amphibians or mice. If you have kids, consider these 7 best small 
    animal pets for children instead.`

    const catResult = `
    Congrats! Cats are some of the best pets around, and it sounds like you’re 
    ready for a feline friend. Cats are social companions, naturally tidy and 
    relatively easy to train (most kittens will instinctively use the litter box). 
    However, despite what you may have heard, cats are not “low-maintenance pets.” 
    Like their canine counterparts, cats require daily playtime, plenty of mental 
    stimulation and regular veterinary care. Cats can also experience separation 
    anxiety, so make sure your schedule allows for ample time with your new pet.`

    const dogResult = `
    You sound like a dog person! Dogs require daily exercise, plenty of playtime, 
    and consistent training to live their happiest, healthiest lives. You seem up 
    for the challenge—not to mention all of the rewards that man’s best friend offers. 
    To find your perfect match, be sure to carefully research breeds before choosing a dog. 
    (Breeds can vary widely in terms of personality, exercise requirements and grooming needs.) 
    You’ll also want to consider your ideal dog’s age. Do you have the energy to keep up 
    with a bouncing puppy? If not, consider adopting an older dog. Additionally, be aware 
    of your budget. Between supplies, grooming and veterinary bills, dogs are among the 
    most expensive pets. The ASPCA estimates that caring for a large dog costs more than 
    $2,000 the first year and around $1,000 annually, not including emergency expenses. 
    Learn more about life with a new dog.`

    const fishResult = `
    So you’d like a pet, but perhaps not the walks, noise, grooming and messes. Have you 
    considered fish? Fish offer a calming connection to the natural world without many of 
    the commitments that come along with other animals. As a responsible pet parent, it’s 
    still important to do your research before purchasing fish. Different species require 
    different environments, and not all fish are compatible roommates. If you’re new to fish, 
    consider a freshwater aquarium and species that are easier to care for, such as goldfish, 
    zebra fish or neon tetras. Follow the basics of fish care, and your foray into pet parenthood 
    will go swimmingly!`

    switch(props.result) {
        case 0:
            return (
                <div>
                    <img src ={fish}/>
                    <h1>Fish!</h1>
                    <p align = {'left'}>{fishResult}</p>
                </div>
            )
        case 1:
            return (
                <div>
                    <img src ={dog}/>
                    <h1>Dogs!</h1>
                    <p align = {'left'}>{dogResult}</p>
                </div>
            )
        case 2:
            return (
                <div>
                    <img src ={cat}/>
                    <h1>Cats!</h1>
                    <p align = {'left'}>{catResult}</p>
                </div>
            )
        case 3:
            return (
                <div>
                    <img src ={bird}/>
                    <h1>bird!</h1>
                    <p align = {'left'}>{birdResult}</p>
                </div>
            )
        case 4:
            return (
                <div>
                    <img src ={smallPet}/>
                    <h1>Small Pets and Reptiles!</h1>
                    <p align = {'left'}>{smallResult}</p>
                </div>
            )
        default: 
            return (
                <div>
                    <img src ={resultsCat}/>
                    <h1>Please take our survey to see your results!</h1>
                </div>
            )
    }
}

export default Results