<template>
    <div class="box">
        <p class="text"><strong><em>I am a plane eater</em></strong></p>
        <img :src="plane" height="100px" width="100px" class="image" />
    </div>
</template>

<script>
import cat from "../assets/cat.jpeg"

export default {
    data() {
        return {
            plane: cat
        }
    }
}
</script>


<style>
.box {
    border: 3px solid green;
    margin: 10px;
    width: 150px
}

.image{
    width:150px;
    display:block;
    margin-left:auto; 
    margin-right:auto;
}

.text{
    text-align:center;
}
</style>