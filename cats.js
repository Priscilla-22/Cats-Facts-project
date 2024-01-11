document.addEventListener('DOMContentLoaded', function () {
    const dogContainer = document.getElementById('dogContainer');
    const mainBody = document.body

   const catFactsData = document.createElement('h1');
   catFactsData.classList.add('top-heading');
   catFactsData.textContent = 'CAT FACTS';
    mainBody.appendChild(catFactsData);
    
  const exampleImageUrls = [
    'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8fDA%3D',
  ];

  // Fetch dog facts from the API
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((dog, index) => {

        const exampleImageUrl =
          exampleImageUrls[index % exampleImageUrls.length];

        const imgElement = document.createElement('img');
        imgElement.src = exampleImageUrl;
        imgElement.alt = 'Dog';

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-container');
        imgDiv.appendChild(imgElement);

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        cardContainer.appendChild(imgDiv);

        // Create and append h2 elements for each fact
        for (let i = 1; i <= 1; i++) {
          const factNum = document.createElement('h2');
          factNum.classList.add('fact-number');
          factNum.textContent = `Fact ${index + 1}`;
          cardContainer.appendChild(factNum);
        }

        // Create and append the paragraph with dog facts
        const factElement = document.createElement('p');
        factElement.textContent = dog.text;
        cardContainer.appendChild(factElement);

        // Append the card container to the dog container
        dogContainer.appendChild(cardContainer);
      });
    })
    .catch((error) => console.error('Error fetching dog facts:', error));
});
