"use client";

import type React from "react";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react"; // Import X and CheckCircle icons from lucide-react
import Button from "../../button/Button"; // Import your custom Button component

interface ContactFormProps {
  onSubmit: () => void; // Callback for form submission
  setIsFormVisible: (visible: boolean) => void; // Function to close the form
}

export default function ContactForm({
  onSubmit,
  setIsFormVisible,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "91", // Default country code (India)
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Full list of country codes from your example
  const countryCodes = [
    { code: "91", country: "IN", label: "+91" },
    { code: "213", country: "DZ", label: "+213" },
    { code: "376", country: "AD", label: "+376" },
    { code: "244", country: "AO", label: "+244" },
    { code: "1264", country: "AI", label: "+1264" },
    { code: "1268", country: "AG", label: "+1268" },
    { code: "54", country: "AR", label: "+54" },
    { code: "374", country: "AM", label: "+374" },
    { code: "297", country: "AW", label: "+297" },
    { code: "61", country: "AU", label: "+61" },
    { code: "43", country: "AT", label: "+43" },
    { code: "994", country: "AZ", label: "+994" },
    { code: "1242", country: "BS", label: "+1242" },
    { code: "973", country: "BH", label: "+973" },
    { code: "880", country: "BD", label: "+880" },
    { code: "1246", country: "BB", label: "+1246" },
    { code: "375", country: "BY", label: "+375" },
    { code: "32", country: "BE", label: "+32" },
    { code: "501", country: "BZ", label: "+501" },
    { code: "229", country: "BJ", label: "+229" },
    { code: "1441", country: "BM", label: "+1441" },
    { code: "975", country: "BT", label: "+975" },
    { code: "591", country: "BO", label: "+591" },
    { code: "387", country: "BA", label: "+387" },
    { code: "267", country: "BW", label: "+267" },
    { code: "55", country: "BR", label: "+55" },
    { code: "673", country: "BN", label: "+673" },
    { code: "359", country: "BG", label: "+359" },
    { code: "226", country: "BF", label: "+226" },
    { code: "257", country: "BI", label: "+257" },
    { code: "855", country: "KH", label: "+855" },
    { code: "237", country: "CM", label: "+237" },
    { code: "1", country: "CA", label: "+1" },
    { code: "238", country: "CV", label: "+238" },
    { code: "1345", country: "KY", label: "+1345" },
    { code: "236", country: "CF", label: "+236" },
    { code: "56", country: "CL", label: "+56" },
    { code: "86", country: "CN", label: "+86" },
    { code: "57", country: "CO", label: "+57" },
    { code: "269", country: "KM", label: "+269" },
    { code: "242", country: "CG", label: "+242" },
    { code: "682", country: "CK", label: "+682" },
    { code: "506", country: "CR", label: "+506" },
    { code: "385", country: "HR", label: "+385" },
    { code: "53", country: "CU", label: "+53" },
    { code: "90", country: "CY", label: "+90" },
    { code: "357", country: "CY", label: "+357" },
    { code: "420", country: "CZ", label: "+420" },
    { code: "45", country: "DK", label: "+45" },
    { code: "253", country: "DJ", label: "+253" },
    { code: "1809", country: "DM", label: "+1809" },
    { code: "593", country: "EC", label: "+593" },
    { code: "20", country: "EG", label: "+20" },
    { code: "503", country: "SV", label: "+503" },
    { code: "240", country: "GQ", label: "+240" },
    { code: "291", country: "ER", label: "+291" },
    { code: "372", country: "EE", label: "+372" },
    { code: "251", country: "ET", label: "+251" },
    { code: "500", country: "FK", label: "+500" },
    { code: "298", country: "FO", label: "+298" },
    { code: "679", country: "FJ", label: "+679" },
    { code: "358", country: "FI", label: "+358" },
    { code: "33", country: "FR", label: "+33" },
    { code: "594", country: "GF", label: "+594" },
    { code: "689", country: "PF", label: "+689" },
    { code: "241", country: "GA", label: "+241" },
    { code: "220", country: "GM", label: "+220" },
    { code: "7880", country: "GE", label: "+7880" },
    { code: "49", country: "DE", label: "+49" },
    { code: "233", country: "GH", label: "+233" },
    { code: "350", country: "GI", label: "+350" },
    { code: "30", country: "GR", label: "+30" },
    { code: "299", country: "GL", label: "+299" },
    { code: "1473", country: "GD", label: "+1473" },
    { code: "590", country: "GP", label: "+590" },
    { code: "671", country: "GU", label: "+671" },
    { code: "502", country: "GT", label: "+502" },
    { code: "224", country: "GN", label: "+224" },
    { code: "245", country: "GW", label: "+245" },
    { code: "592", country: "GY", label: "+592" },
    { code: "509", country: "HT", label: "+509" },
    { code: "504", country: "HN", label: "+504" },
    { code: "852", country: "HK", label: "+852" },
    { code: "36", country: "HU", label: "+36" },
    { code: "354", country: "IS", label: "+354" },
    { code: "62", country: "ID", label: "+62" },
    { code: "964", country: "IQ", label: "+964" },
    { code: "98", country: "IR", label: "+98" },
    { code: "353", country: "IE", label: "+353" },
    { code: "972", country: "IL", label: "+972" },
    { code: "39", country: "IT", label: "+39" },
    { code: "1876", country: "JM", label: "+1876" },
    { code: "81", country: "JP", label: "+81" },
    { code: "962", country: "JO", label: "+962" },
    { code: "7", country: "KZ", label: "+7" },
    { code: "254", country: "KE", label: "+254" },
    { code: "686", country: "KI", label: "+686" },
    { code: "850", country: "KP", label: "+850" },
    { code: "82", country: "KR", label: "+82" },
    { code: "965", country: "KW", label: "+965" },
    { code: "996", country: "KG", label: "+996" },
    { code: "856", country: "LA", label: "+856" },
    { code: "371", country: "LV", label: "+371" },
    { code: "961", country: "LB", label: "+961" },
    { code: "266", country: "LS", label: "+266" },
    { code: "231", country: "LR", label: "+231" },
    { code: "218", country: "LY", label: "+218" },
    { code: "417", country: "LI", label: "+417" },
    { code: "370", country: "LT", label: "+370" },
    { code: "352", country: "LU", label: "+352" },
    { code: "853", country: "MO", label: "+853" },
    { code: "389", country: "MK", label: "+389" },
    { code: "261", country: "MG", label: "+261" },
    { code: "265", country: "MW", label: "+265" },
    { code: "60", country: "MY", label: "+60" },
    { code: "960", country: "MV", label: "+960" },
    { code: "223", country: "ML", label: "+223" },
    { code: "356", country: "MT", label: "+356" },
    { code: "692", country: "MH", label: "+692" },
    { code: "596", country: "MQ", label: "+596" },
    { code: "222", country: "MR", label: "+222" },
    { code: "52", country: "MX", label: "+52" },
    { code: "691", country: "FM", label: "+691" },
    { code: "373", country: "MD", label: "+373" },
    { code: "377", country: "MC", label: "+377" },
    { code: "976", country: "MN", label: "+976" },
    { code: "1664", country: "MS", label: "+1664" },
    { code: "212", country: "MA", label: "+212" },
    { code: "258", country: "MZ", label: "+258" },
    { code: "95", country: "MN", label: "+95" },
    { code: "264", country: "NA", label: "+264" },
    { code: "674", country: "NR", label: "+674" },
    { code: "977", country: "NP", label: "+977" },
    { code: "31", country: "NL", label: "+31" },
    { code: "687", country: "NC", label: "+687" },
    { code: "64", country: "NZ", label: "+64" },
    { code: "505", country: "NI", label: "+505" },
    { code: "227", country: "NE", label: "+227" },
    { code: "234", country: "NG", label: "+234" },
    { code: "683", country: "NU", label: "+683" },
    { code: "672", country: "NF", label: "+672" },
    { code: "670", country: "NP", label: "+670" },
    { code: "47", country: "NO", label: "+47" },
    { code: "968", country: "OM", label: "+968" },
    { code: "92", country: "PK", label: "+92" },
    { code: "680", country: "PW", label: "+680" },
    { code: "507", country: "PA", label: "+507" },
    { code: "675", country: "PG", label: "+675" },
    { code: "595", country: "PY", label: "+595" },
    { code: "51", country: "PE", label: "+51" },
    { code: "63", country: "PH", label: "+63" },
    { code: "48", country: "PL", label: "+48" },
    { code: "351", country: "PT", label: "+351" },
    { code: "1787", country: "PR", label: "+1787" },
    { code: "974", country: "QA", label: "+974" },
    { code: "262", country: "RE", label: "+262" },
    { code: "40", country: "RO", label: "+40" },
    { code: "250", country: "RW", label: "+250" },
    { code: "378", country: "SM", label: "+378" },
    { code: "239", country: "ST", label: "+239" },
    { code: "966", country: "SA", label: "+966" },
    { code: "221", country: "SN", label: "+221" },
    { code: "381", country: "CS", label: "+381" },
    { code: "248", country: "SC", label: "+248" },
    { code: "232", country: "SL", label: "+232" },
    { code: "65", country: "SG", label: "+65" },
    { code: "421", country: "SK", label: "+421" },
    { code: "386", country: "SI", label: "+386" },
    { code: "677", country: "SB", label: "+677" },
    { code: "252", country: "SO", label: "+252" },
    { code: "27", country: "ZA", label: "+27" },
    { code: "34", country: "ES", label: "+34" },
    { code: "94", country: "LK", label: "+94" },
    { code: "290", country: "SH", label: "+290" },
    { code: "1869", country: "KN", label: "+1869" },
    { code: "1758", country: "SC", label: "+1758" },
    { code: "597", country: "SR", label: "+597" },
    { code: "249", country: "SD", label: "+249" },
    { code: "268", country: "SZ", label: "+268" },
    { code: "46", country: "SE", label: "+46" },
    { code: "41", country: "CH", label: "+41" },
    { code: "963", country: "SY", label: "+963" },
    { code: "886", country: "TW", label: "+886" },
    { code: "992", country: "TJ", label: "+992" },
    { code: "66", country: "TH", label: "+66" },
    { code: "228", country: "TG", label: "+228" },
    { code: "676", country: "TO", label: "+676" },
    { code: "1868", country: "TT", label: "+1868" },
    { code: "216", country: "TN", label: "+216" },
    { code: "90", country: "TR", label: "+90" },
    { code: "993", country: "TM", label: "+993" },
    { code: "1649", country: "TC", label: "+1649" },
    { code: "688", country: "TV", label: "+688" },
    { code: "44", country: "GB", label: "+44" },
    { code: "256", country: "UG", label: "+256" },
    { code: "380", country: "UA", label: "+380" },
    { code: "971", country: "AE", label: "+971" },
    { code: "598", country: "UY", label: "+598" },
    { code: "998", country: "UZ", label: "+998" },
    { code: "678", country: "VU", label: "+678" },
    { code: "379", country: "VA", label: "+379" },
    { code: "58", country: "VE", label: "+58" },
    { code: "84", country: "VN", label: "+84" },
    { code: "681", country: "WF", label: "+681" },
    { code: "969", country: "YE", label: "+969" },
    { code: "967", country: "YE", label: "+967" },
    { code: "260", country: "ZM", label: "+260" },
    { code: "263", country: "ZW", label: "+263" },
  ];

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (name === "email" || name === "phone") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", phone: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Replace the handleSubmit function with this updated version that sends data to Google Sheets
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Format the data for Google Sheets
        const formattedData = {
          name: formData.name,
          email: formData.email,
          phone: `+${formData.countryCode}${formData.phone}`,
          timestamp: new Date().toISOString(),
        };

        // Replace with your Google Apps Script Web App URL
        const scriptURL =
          "https://script.google.com/macros/s/AKfycbwwNXorP0mhFEq5MolOJtf2jZqABnW6eZusbvfA7rIigOYolH79diNEQCWQlf-JRNqb/exec";

        // Method 1: Using no-cors mode (can't read response, but avoids CORS errors)
        await fetch(scriptURL, {
          method: "POST",
          body: JSON.stringify(formattedData),
          mode: "no-cors",
        });

        // Since we can't check the response with no-cors, we assume success if no error was thrown
        console.log("Form submitted successfully", formData);
        setIsSuccess(true);

        // Close the form after showing success message
        setTimeout(() => {
          onSubmit();
        }, 3000);
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-4 sm:px-0">
      <div className="bg-white p-4 sm:p-8 rounded-lg w-full max-w-md relative shadow-lg mx-2 sm:mx-0">
        {/* Close Button (X) */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#115e71] hover:text-[#b7955f]"
        >
          <X className="h-6 w-6" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <p className="text-center text-lg font-medium">
              Thank you
              <br />
              for sharing your information.
              <br />
              One of our executives will get in touch with
              <br className="hidden xl:block" />
              you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* Enquiry Form Title */}
            <h2 className="text-xl md:text-2xl font-bold text-[#115e71] text-center mb-6">
              Enquiry Form
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />

              {/* Email Field */}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-400`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field with Country Code */}
              <div className="mb-6">
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-l w-24 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number (10 digits)"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`p-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-r w-full focus:outline-none focus:ring-1 focus:ring-gray-400`}
                    required
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-4">
                <Button
                  text={isSubmitting ? "Submitting..." : "Submit"}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                />
              </div>
            </form>

            {/* Loading Spinner */}
            {isSubmitting && (
              <div className="flex justify-center mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#115e71]"></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
