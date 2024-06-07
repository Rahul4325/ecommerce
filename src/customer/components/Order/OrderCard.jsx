import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Adjust } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://www.omaxechowk.in/wp-content/uploads/2023/11/Ram-Kishan-Sarees--200x300.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Women's Saree pure cotton</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹199</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
                <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span>Delivered On March 03</span>
            </p>
            <p className="text-xs">
                Your Item has been Delivered
            </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delic=very On 03 March</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
