import argparse
import logging
import os
import pickle

import pandas as pd
from sklearn.metrics import mean_absolute_error, mean_squared_error

from HousePricePrediction.logger import setup_logger


def load_model(model_folder: str, model_name: str):

    model_path = os.path.join(model_folder, f"{model_name}_model.pkl")
    with open(model_path, "rb") as model_file:
        model = pickle.load(model_file)
    return model


def load_data(dataset_folder: str) -> pd.DataFrame:
    test_path = os.path.join(dataset_folder, "test.csv")
    return pd.read_csv(test_path)


def score_models(model, X_test, y_test):
    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    rmse = mean_absolute_error(y_test, predictions)
    return mse, rmse


def score_model():
    test_path = os.path.join("data", "processed", "test.csv")
    test_data = pd.read_csv(test_path)
    X_test = test_data.drop("median_house_value", axis=1)
    y_test = test_data["median_house_value"]
    model_path = os.path.join("models", "pickles")

    rf_model = load_model(
        model_path,
        "House_Price_Prediction Random_Forest_1",
    )
    rf_mse, rf_rmse = score_models(rf_model, X_test, y_test)
    print(f"Random Forest Model 1 - MSE: {rf_mse}, RMSE: {rf_rmse}")

    rf_model_2 = load_model(
        model_path,
        "House_Price_Prediction Random_Forest_2",
    )
    rf_mse_2, rf_rmse_2 = score_models(rf_model_2, X_test, y_test)
    print(f"Random Forest Model 2 - MSE: {rf_mse_2}, RMSE: {rf_rmse_2}")

    lr_model = load_model(
        model_path,
        "House_Price_Prediction Linear Regression",
    )
    lr_mse, lr_rmse = score_models(lr_model, X_test, y_test)
    print(f"Linear Regression Model - MSE: {lr_mse}, RMSE: {lr_rmse}")

    dt_model = load_model(
        model_path,
        "House_Price_Prediction Decision Tree",
    )

    dt_mse, dt_rmse = score_models(dt_model, X_test, y_test)
    print(f"Decision Tree Model - MSE: {dt_mse}, RMSE: {dt_rmse}")

    os.makedirs(r"outputs/", exist_ok=True)
    os.makedirs(r"outputs/", exist_ok=True)
    os.makedirs(r"outputs/", exist_ok=True)
    with open(
        os.path.join(r"outputs/", "scores.txt"),
        "w",
    ) as scores_file:
        scores_file.write(f"Random Forest Model 1- MSE: {rf_mse}, RMSE: {rf_rmse}\n")
        scores_file.write(
            f"Random Forest Model 2 - MSE: {rf_mse_2}, RMSE: {rf_rmse_2}\n"
        )
        scores_file.write(f"Linear Regression Model - MSE: {lr_mse}, RMSE: {lr_rmse}\n")
        scores_file.write(f"Decision Tree Model - MSE: {dt_mse}, RMSE: {dt_rmse}\n")
    return


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Score regression models on the provided test dataset."
    )
    parser.add_argument(
        "model_folder", type=str, help="Folder path containing the trained models."
    )
    parser.add_argument(
        "dataset_folder", type=str, help="Folder path containing the test dataset."
    )
    parser.add_argument(
        "output_folder",
        type=str,
        help="Output folder path for saving the scores.",
    )
    parser.add_argument(
        "--log-level",
        default="INFO",
        help="Specify the log level (e.g., DEBUG, INFO, WARNING, ERROR)",
    )
    parser.add_argument(
        "--log-to-file", action="store_true", help="Log messages to a file"
    )
    parser.add_argument(
        "--no-console-log",
        action="store_true",
        help="Do not log messages to the console",
    )
    args = parser.parse_args()

    logger = setup_logger(
        log_level=getattr(logging, args.log_level.upper()),
        log_to_file=args.log_to_file,
        log_file_path=os.path.join("logs", "score_log.log"),
        console_log=not args.no_console_log,
    )

    test_data = load_data(args.dataset_folder)
    X_test = test_data.drop("median_house_value", axis=1)
    y_test = test_data["median_house_value"]
    logger.info("Loading Dataset")

    # Score Random Forest model 1
    rf_model = load_model(args.model_folder, "House_Price_Prediction Random_Forest_1")
    rf_mse, rf_rmse = score_models(rf_model, X_test, y_test)
    print(f"Random Forest Model 1- MSE: {rf_mse}, RMSE: {rf_rmse}")
    logger.info(f"Score of Random Forest Model 1- MSE: {rf_mse}, RMSE: {rf_rmse}")

    # Score Random Forest model 2
    rf_model_2 = load_model(args.model_folder, "House_Price_Prediction Random_Forest_2")
    rf_mse_2, rf_rmse_2 = score_models(rf_model_2, X_test, y_test)
    print(f"Random Forest Model 2- MSE: {rf_mse_2}, RMSE: {rf_rmse_2}")
    logger.info(f"Score of Random Forest Model 2- MSE: {rf_mse_2}, RMSE: {rf_rmse_2}")

    # Score Linear Regression model
    lr_model = load_model(args.model_folder, "House_Price_Prediction Linear Regression")
    lr_mse, lr_rmse = score_models(lr_model, X_test, y_test)
    print(f"Linear Regression Model - MSE: {lr_mse}, RMSE: {lr_rmse}")
    logger.info(f"Score of Linear Regression Model - MSE: {lr_mse}, RMSE: {lr_rmse}")

    # Score Decision Tree model
    dt_model = load_model(args.model_folder, "House_Price_Prediction Decision Tree")
    dt_mse, dt_rmse = score_models(dt_model, X_test, y_test)
    print(f"Decision Tree Model - MSE: {dt_mse}, RMSE: {dt_rmse}")
    logger.info(f"Score of Decision Tree Model - MSE: {dt_mse}, RMSE: {dt_rmse}")

    os.makedirs(args.output_folder, exist_ok=True)
    with open(os.path.join(args.output_folder, "scores.txt"), "w") as scores_file:
        scores_file.write(f"Random Forest Model 1- MSE: {rf_mse}, RMSE: {rf_rmse}\n")
        scores_file.write(
            f"Random Forest Model 2- MSE: {rf_mse_2}, RMSE: {rf_rmse_2}\n"
        )
        scores_file.write(f"Linear Regression Model - MSE: {lr_mse}, RMSE: {lr_rmse}\n")
        scores_file.write(f"Decision Tree Model - MSE: {dt_mse}, RMSE: {dt_rmse}\n")

    print(f"Scores saved to {os.path.join(args.output_folder, 'scores.txt')}")
    logger.info(f"Scores saved to {os.path.join(args.output_folder, 'scores.txt')}")
