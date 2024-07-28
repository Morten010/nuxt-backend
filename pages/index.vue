<template>
    <h1
        class="text-6xl font-bold text-green-950 leading-[55px] mb-4"
    >
        Klar til at lave mad?
    </h1>
    
    <HomepageCategoryShowcase 
        fetch-url="/api/category/1"
        more-url="/category/1"
        title="Morgenmad"
    />
    <HomepageCategoryShowcase 
        fetch-url="/api/category/1"
        more-url="/category/1"
        title="Frokost"
    />
    <HomepageCategoryShowcase 
        fetch-url="/api/category/1"
        more-url="/category/1"
        title="Aftensmad"
    />

    
</template>