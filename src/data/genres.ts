// 分类标识（英文 slug，用于 URL）→ 中文名称（用于界面展示）
const genreLabels: Record<string, string> = {
  action: '动作',
  adventure: '冒险',
  fantasy: '奇幻',
  romance: '言情',
  isekai: '异世界',
  'slice of life': '日常',
  comedy: '搞笑',
  drama: '剧情',
  horror: '惊悚',
  mystery: '悬疑',
  'sci-fi': '科幻',
  supernatural: '灵异',
  'martial arts': '武侠',
  xianxia: '仙侠',
};

export function genreLabel(genre: string): string {
  return genreLabels[genre.toLowerCase()] || genre;
}
