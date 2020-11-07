<template>
    <div>
        <i-tree-transfer
            v-model="value"
            :data="data"
            filterable
        />
        <p>v-model: {{value}}</p>
        <testChild />
    </div>
</template>