import React from "react";
import Image from "./1.jpg";

function App() {
  const recipe = {
    title: "Пирог-торт медовый",
    ingredients: [
      { name: "Кефир ", quantity: "150 мл" },
      { name: "Яйца", quantity: "3 шт." },
      { name: "Мёд", quantity: "3 ст. ложки" },
      { name: "Сахар", quantity: "4 ст. ложки" },
      { name: "Сода", quantity: "1 ч. ложка" },
      { name: "Мука", quantity: "250 г" },
      { name: "Сметана ", quantity: "250 мл" },
    ],
    instructions: [
      "Для приготовления теста смешиваем яйца и сахар (взбиваем миксером)",
      "Добавляем соду и мед, взбиваем дальше.",
      "Затем добавляем кефир и снова взбиваем.",
      "Постепенно вводим муку. Тесто должно быть жидким (как на блинчики).",
      "Подготавливаем форму для выпекания, смазываем её сливочным маслом. Выливаем половину теста в форму и отправляем выпекаться в разогретую духовку при температуре 180 градусов. (Если есть две одинаковые формы, то распределите тесто пополам по двум формам и отправьте сразу два медовых пирога-коржа в духовку). Выпекаем коржи 25-30 минут.",
      "Пока коржи пекутся, быстренько делаем крем из сметаны. Для этого начинаем взбивать сметану на медленном режиме миксера. Затем, постепенно вводя сахар, увеличиваем скорость миксера. Взбиваем до загустения сметаны. Крем готов.",
      "Готовые коржи вынимаем из духовки. Коржи нужно остудить (я быстренько вынесла их на балкон; можете так же поступить, если готовите торт зимой).",
      "Когда коржи остыли, разрезаем каждый из них еще на два коржа. Срезаем по кругу тоненькие полосочки, и оставляем для посыпки.",
      "Каждый корж густо смазываем сметанным кремом, укладываем коржи друг на друга.",
      "Срезанные края коржей измельчаем любым удобным способом (я терла на терке) и посыпаем медовый пирог-торт.",
    ],
    image: Image,
  };

  return (
    <div className="app">
      <h1>{recipe.title}</h1>
      <h2>Інгрідієнти:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <h2>Як приготувати:</h2>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <img src={recipe.image} alt="Recipe" className="recipe-image" />
    </div>
  );
}

export default App;
