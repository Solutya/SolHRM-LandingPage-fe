import pric_img_1 from "../../public/assets/images/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/images/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/images/price/price-icon-3.png";
import pric_img_4 from "../../public/assets/images/price/price-4.1.png";

const PriceList = (
  <>
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="price-path-1"
        d="M6.344 9.20708L1.81052 6.82365C1.46119 6.64408 1.05752 6.6604 0.731485 6.87263C0.397684 7.09301 0.203613 7.46032 0.203613 7.86844V12.3659C0.203613 13.1414 0.615042 13.8433 1.27488 14.1943L5.8006 16.5778C5.95586 16.6594 6.12664 16.7002 6.29742 16.7002C6.49925 16.7002 6.70109 16.6431 6.87963 16.5288C7.21343 16.3166 7.4075 15.9411 7.4075 15.533V11.0355C7.41527 10.2519 7.00384 9.5499 6.344 9.20708Z"
        fill="currentcolor"
      />
      <path
        className="price-path-2"
        d="M15.3846 6.87587C15.0508 6.66372 14.6471 6.63924 14.3056 6.82691L9.77978 9.20956C9.11993 9.56043 8.7085 10.254 8.7085 11.0373V15.5334C8.7085 15.9413 8.90257 16.3167 9.23637 16.5288C9.41492 16.6431 9.61676 16.7002 9.81859 16.7002C9.98938 16.7002 10.1602 16.6594 10.3154 16.5778L14.8412 14.1952C15.5011 13.8443 15.9125 13.1507 15.9125 12.3674V7.87136C15.9125 7.46337 15.7184 7.09618 15.3846 6.87587Z"
        fill="currentcolor"
      />
      <path
        className="price-path-3"
        d="M13.9152 2.96146L8.86226 0.219067C8.33036 -0.0730223 7.68564 -0.0730223 7.15375 0.219067L2.10076 2.96146C1.73005 3.1643 1.50439 3.55375 1.50439 4C1.50439 4.43813 1.73005 4.8357 2.10076 5.03854L7.15375 7.78093C7.4197 7.92698 7.71788 8 8.008 8C8.29813 8 8.59631 7.92698 8.86226 7.78093L13.9152 5.03854C14.286 4.8357 14.5116 4.44625 14.5116 4C14.5116 3.55375 14.286 3.1643 13.9152 2.96146Z"
        fill="currentcolor"
      />
    </svg>
  </>
);

const price_data = [
  //  monthly price here 1 to 4
  {
    id: 1,
    category: "monthly",
    img: pric_img_1,
    title: "Standard Plan",
    description: <b>Up To 25 Employees</b>,
    paymentLink: "https://shop.bkash.com/solutya-pvt-ltdrm54988/pay/bdt4000/oUm4cl",
    cls: "",
    price: "4000",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Hidden Cost",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Installation Charge",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 2,
    category: "monthly",
    img: pric_img_2,
    title: "Gold Plan",
    description: <b>Up To 50 Employees</b>,
    paymentLink: "https://shop.bkash.com/solutya-pvt-ltdrm54988/pay/bdt7000/Rfddxp",
    cls: "active",
    price: "7000",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Hidden Cost",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Installation Charge",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 3,
    category: "monthly",
    img: pric_img_3,
    title: "Custom Plan",
    description:<b>100+ Employees</b>,
    paymentLink: "",
    fullDescription: "A TAILORED PRICE PLANNING FOR BUSINESS WITH CUSTOMIZED REQUIREMENTS",
    cls: "custom-plan",
    price: "",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "Custom Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "Custom On-Boarding",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 dedicated Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 4,
    category: "monthly",
    img: pric_img_4,
    title: "Add Ons",
    description: <b>GET THE ULTIMATE EXCLUSIVEADD ONS</b>,
    paymentLink: "",
    cls: "",
    price: "",
    price_feature: [
      {
        list: "৳ 1000/Month For every 10 Employees",
        icon: PriceList,
        cls: "",
      },
      {
        list: (
          <>
            Live Tracking<br /> ৳ 50/Month / Employees.  (UPCOMING) 
          </>
        ),
        icon: PriceList,
        cls: "inactive",
      },
    ],
  },

  //  yearly price here  4 to 6
  {
    id: 5,
    category: "yearly",
    img: pric_img_1,
    title: "Standard Plan",
    description: <b>Up To 25 Employees</b>,
    paymentLink: "https://shop.bkash.com/solutya-pvt-ltdrm54988/pay/bdt45000/UCnGzv",
    cls: "",
    price: "45000",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Hidden Cost",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Installation Charge",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 6,
    category: "yearly",
    img: pric_img_2,
    title: "Gold Plan",
    description: <b>Up To 50 Employees</b>,
    paymentLink: "https://shop.bkash.com/solutya-pvt-ltdrm54988/pay/bdt83640/d5HwMn",
    cls: "active",
    price: "82000",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Hidden Cost",
        icon: PriceList,
        cls: "",
      },
      {
        list: "No Installation Charge",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 7,
    category: "yearly",
    img: pric_img_3,
    title: "Custom Plan",
    description: <b>100+ Employees</b>,
    paymentLink: "",
    fullDescription: "A TAILORED PRICE PLANNING FOR BUSINESS WITH CUSTOMIZED REQUIREMENTS",
    cls: "custom-plan",
    price: "",
    price_feature: [
      {
        list: "All Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "Custom Features",
        icon: PriceList,
        cls: "",
      },
      {
        list: "Custom On-Boarding",
        icon: PriceList,
        cls: "",
      },
      {
        list: "24/7 dedicated Support",
        icon: PriceList,
        cls: "",
      },
    ],
  },
  {
    id: 8,
    category: "yearly",
    img: pric_img_4,
    title: "Add Ons",
    description: <b>GET THE ULTIMATE EXCLUSIVEADD ONS</b>,
    paymentLink: "",
    cls: "",
    price: "",
    price_feature: [
      {
        list: "৳ 1000/Month For every 10 Employees",
        icon: PriceList,
        cls: "",
      },
      {
        list: (
          <>
            Live Tracking<br /> ৳ 50/Month / Employees.  (UPCOMING) 
          </>
        ),
        icon: PriceList,
        cls: "inactive",
      },
    ],
  },
];
export default price_data;
