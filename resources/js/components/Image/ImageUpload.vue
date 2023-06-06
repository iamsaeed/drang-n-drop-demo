<template>
    <input type="file" class="form-control-sm" @input="getImage($event)" placeholder="Image"/>
</template>

<script setup>



const emit = defineEmits(['fileData'])

function getImage(e) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
        emit('fileData', e.target.result)
    }
}

</script>
