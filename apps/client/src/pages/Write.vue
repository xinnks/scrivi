<script setup>
import GuardedPage from "./../layout/GuardedPage.vue";
import TextEditor from "./../components/TextEditor.vue";
import ArticleReferences from "./../components/ArticleReferences.vue";
import SearchBox from "./../components/SearchBox.vue";
import CoWriters from "./../components/CoWriters.vue";
</script>

<template>

  <guarded-page>
    <template #default>

      <div class="flex w-full space-x-2">
        <div class="flex flex-1 flex-col space-y-3">
          <TextEditor></TextEditor>
          <ArticleReferences></ArticleReferences>
        </div>

        <div class="flex w-[300px] flex-col space-y-3">
          <SearchBox></SearchBox>
          <CoWriters></CoWriters>
        </div>
      </div>

    </template>
  </guarded-page>

</template>