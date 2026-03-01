# ベースイメージは Node.js 18.19.1
FROM node:18.19.1-slim

# アプリケーション用ディレクトリを作成
WORKDIR /app

# フロントエンドのファイルをローカルPCからコンテナへコピー
COPY index.html /app/index.html
COPY main.js /app/main.js
COPY style.css /app/style.css


# 静的ファイル配信用サーバをインストール
RUN npm install -g http-server@14.1.1

# 静的ファイルを3000番ポートで配信
CMD ["http-server", "/app", "-p", "3000"]