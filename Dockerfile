# Use a base image with Miniconda installed
FROM continuumio/miniconda3

# Set the working directory in the container
WORKDIR /app

# Copycd .. the environment file into the container
COPY env.yml /app/env.yml

# Create the conda environment
RUN conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/ && \
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ && \
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/ && \
    conda config --set channel_priority flexible && \
    conda config --set ssl_verify true

RUN conda env update -n base -f env.yml

# Activate the conda environment and make it the default
SHELL ["conda", "run", "-n", "mle-dev", "/bin/bash", "-c"]

# Copy the current directory contents into the container at /app
COPY . /app

# Make sure the environment is activated
ENV PATH /opt/conda/envs/mle-dev/bin:$PATH

# Run your python script when the container launches
CMD ["python", "src/main.py"]