import logging
import sys


def setup_logger(
    log_level: int = logging.DEBUG,
    log_to_file: bool = False,
    log_file_path: str = None,
    console_log: bool = True,
) -> logging.Logger:

    logger = logging.getLogger(__name__)
    logger.setLevel(log_level)

    if console_log:
        console_handler = logging.StreamHandler(sys.stdout)
        console_handler.setLevel(log_level)
        logger.addHandler(console_handler)

    if log_to_file:
        file_handler = logging.FileHandler(log_file_path)
        file_handler.setLevel(log_level)
        logger.addHandler(file_handler)

    formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
    if console_log:
        console_handler.setFormatter(formatter)
    if log_to_file:
        file_handler.setFormatter(formatter)

    return logger
