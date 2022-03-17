<template>
    <ul id="list">
    
    </ul>
</template>

<script>
function highLight(title, searchWord){

    let list = document.getElementById("list")

    if (visible.find = true) {
        research += ""
        for (let i = 0; i < title.length; i++) {
            if (title[i].toLowerCase().includes(searchWord)) {
            
            let li = document.createElement('li')
            
            li.textContent = title[i]
            
            list.appendChild(li)
            }
        }

        if (searchWord.length === 0) {
            li.textContent = "aucun résultat"

            list.appendChild(li)
        }   
    }

    return research
}
</script>

