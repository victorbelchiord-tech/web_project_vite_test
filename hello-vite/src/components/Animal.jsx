import { data } from "../utils/constants.js";

// selectedAnimal é uma string, como "cat", "dog", etc.
function Animal({ selectedAnimal }) {
  // Encontre o primeiro animal que corresponda a selectedAnimal.
  let animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  animal = animal?.image
    ? animal
    : data.find((item) => {
        return item.name == "racon";
      });

  // Use a imagem e o nome do animal selecionado no JSX.
  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;
