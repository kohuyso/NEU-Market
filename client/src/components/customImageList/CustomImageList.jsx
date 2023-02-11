import {
  ImageList,
  ImageListItem,
  Modal,
  Box,
  Typography,
  MobileStepper,
  Button,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import "./CustomImageList.css";
import { cropImageFromUrl } from "../../contexts/helper";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

export default function CustomImageList(props) {
  const {imgs} = props.newProduct;

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imgs.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const displayOptions = (numOfImgs) => {
    if (numOfImgs === 1) return [[2, 2]];
    else if (numOfImgs === 2)
      return [
        [2, 2],
        [2, 2],
      ];
    else if (numOfImgs === 3)
      return [
        [2, 2],
        [2, 1],
        [2, 1],
      ];
    else if (numOfImgs === 4)
      return [
        [2, 2],
        [1, 1],
        [1, 1],
        [2, 1],
      ];
    else return 0;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="custom-image-list">
      <ImageList
        sx={{ width: 1, height: 246 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {imgs.slice(0, 4).map((img, index) => {
          var row = displayOptions(imgs.slice(0, 4).length)[index][0];
          var col = displayOptions(imgs.slice(0, 4).length)[index][1];
          return (
            <ImageListItem key={img} cols={row} rows={col}>
              <img
                src={cropImageFromUrl(img, 121, row, col)}
                alt="img"
                loading="lazy"
              />
            </ImageListItem>
          );
        })}

        {displayOptions(imgs.length) === 0 && (
          <div className="show-more" onClick={handleOpen}>
            <div className="show-more-number">{imgs.length - 4}+ more</div>
          </div>
        )}
      </ImageList>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={600}
            sx={{mb: 2}}
          >
            Your product images 
          </Typography>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imgs.map((img, index) => (
              <div
                key={img}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "flex",
                      maxWidth: 400,
                      overflow: "hidden",
                    }}
                    src={img}
                    alt="img"
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{mt: 2}}
            nextButton={
              <Button
                size="small"
                style={{textTransform: 'none', fontSize: 16}}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                style={{textTransform: 'none', fontSize: 16}}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Modal>
    </div>
  );
}
