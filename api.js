const url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-18&sortBy=publishedAt&apiKey=fec60456508640f0b84bd8fc9e9f38eb";
const url1 = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fec60456508640f0b84bd8fc9e9f38eb"

console.log(url1);

async function getData(){
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    displayNews(data.articles);
    



function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <p>Published At: ${article.publishedAt}</p>
            <a href="${article.url}" target="_blank">Read More</a>
            `;
        newsContainer.appendChild(newsItem);
    });
    }
}
document.getElementById('fetchDataBtn').addEventListener('click', getData);