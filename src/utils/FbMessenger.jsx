"use client"
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FbMessenger = () => {
    const fbAppId = process.env.FB_APPID;
const fbPageId = process.env.FB_PAGEID;
console.log(fbAppId,fbPageId)
  return (
    <FacebookProvider appId={fbAppId} chatSupport>
      <CustomChat pageId={fbPageId} minimized={false} />
    </FacebookProvider>
  );
};

export default FbMessenger;
