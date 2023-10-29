function addLang(LangName)
{
    const li = document.createElement('li');
    li.innerHTML = `${LangName}`;
    document.querySelector(".language").appendChild(li);

}

addLang("Python");
addLang("Java");