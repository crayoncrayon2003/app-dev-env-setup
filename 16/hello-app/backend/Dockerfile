# ベースイメージは、Python 3.12.3
FROM python:3.12.3-slim

# アプリケーション用ディレクトリを作成
WORKDIR /app

# バックエンドのファイルをローカルPCからコンテナへコピー
COPY app.py /app/app.py
COPY requirements.txt /app/requirements.txt

# Pythonライブラリをインストール
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt

# アプリを8000番ポートで起動
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
