export const tags = {
  data() {
    return {
      tags: [], // すべてのタグを保持する配列
      inputTag: '', // ユーザーが入力したタグ
      filteredTags: [], // フィルタリングされたタグのリスト
    };
 },
  methods: {
    filterTags() {
      // 入力された文字列に一致するタグをフィルタリング
      this.filteredTags = this.tags.filter(tag =>
        tag.toLowerCase().includes(this.tagInput.toLowerCase())
      );
    },
    selectTag(tag) {
      // タグを選択したときの処理
      this.tagInput = tag;
      this.filteredTags = [];
    },
 },
};