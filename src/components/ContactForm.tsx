import React from "react";
import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormProps } from "../types/components";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const fileList = data.image;

    if (!fileList?.[0]) {
      alert("Please upload a valid image.");
      return;
    }

    const imageFile = fileList[0];
    let base64Image = "";

    if (imageFile) {
      base64Image = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(imageFile);
      });
    }

    const formData = {
      ...data,
      image: base64Image, // Include the Base64 string in the payload
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured properly.");
      console.error("Missing EmailJS environment variables.");
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send the message. Please try again later.");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Full Name{" "}
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="ex., John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email Address{" "}
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="ex., johndoe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone Number{" "}
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="ex., (416) 555-1234"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 font-semibold">
            Street Address{" "}
          </label>
          <input
            id="address"
            type="text"
            {...register("address", {
              required: "Street address is required",
            })}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="ex., 123 Construction Lane"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="mb-4">
              <label htmlFor="city" className="block mb-2 font-semibold">
                City{" "}
              </label>
              <input
                id="city"
                type="text"
                {...register("city", {
                  required: "City is required",
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="ex., Toronto"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="province" className="block mb-2 font-semibold">
                Province{" "}
              </label>
              <select
                id="province"
                {...register("province", {
                  required: "Province is required",
                })}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Province</option>
                <option value="ON">Ontario</option>
                <option value="QC">Quebec</option>
                <option value="BC">British Columbia</option>
                <option value="AB">Alberta</option>
                <option value="SK">Saskatchewan</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NS">Nova Scotia</option>
                <option value="PE">Prince Edward Island</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="YT">Yukon</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
              </select>
              {errors.province && (
                <p className="text-red-500 text-sm">
                  {errors.province.message}
                </p>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-4">
              <label htmlFor="postalCode" className="block mb-2 font-semibold">
                Postal Code{" "}
              </label>
              <input
                id="postalCode"
                type="text"
                {...register("postalCode", {
                  required: "Postal code is required",
                  pattern: {
                    value: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
                    message: "Invalid postal code format",
                  },
                })}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="ex., M5V 2T6"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="referral" className="block mb-2 font-semibold">
                How Did You Hear About Us?{" "}
              </label>
              <select
                id="referral"
                {...register("referral", {
                  required: "Please select an option",
                })}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Word of Mouth</option>
                <option value="advertisement">Local Advertisement</option>
                <option value="other">Other</option>
              </select>
              {errors.referral && (
                <p className="text-red-500 text-sm">
                  {errors.referral.message}
                </p>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="projectType" className="block mb-2 font-semibold">
                Project Type{" "}
              </label>
              <select
                id="projectType"
                {...register("projectType", {
                  required: "Please select a project type",
                })}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="">Select Project Type</option>
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Construction</option>
                <option value="renovation">Renovation</option>
                <option value="remodeling">Remodeling</option>
                <option value="landscaping">Landscaping</option>
                <option value="other">Other</option>
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-sm">
                  {errors.projectType.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectDescription"
            className="block mb-2 font-semibold"
          >
            Project Description{" "}
          </label>
          <textarea
            id="projectDescription"
            {...register("projectDescription", {
              required: "Project description is required",
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 characters",
              },
            })}
            className="w-full border border-gray-300 p-2 rounded h-32"
            placeholder="Provide details about your construction project like goals/visions, specific requests, budget, timeline and contact preference..."
          />
          {errors.projectDescription && (
            <p className="text-red-500 text-sm">
              {errors.projectDescription.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-semibold">
            Upload an Image
          </label>
          <p className="text-sm text-n-4 mb-2">
            Please upload any pictures that would help us
            provide you with the best service possible.
          </p>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image", {
              validate: {
                fileSize: (fileList) =>
                  !fileList ||
                  fileList[0]?.size <= 2 * 1024 * 1024 ||
                  "File must be smaller than 2MB",
                fileType: (fileList) =>
                  !fileList ||
                  /image\/(jpeg|png|gif)/.test(fileList[0]?.type) ||
                  "File must be an image (JPEG, PNG, GIF)",
              },
            })}
            className="w-full border border-gray-300 p-2 rounded"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <Button
          type="submit"
          children="Submit"
          className="w-55 self-center"
          white
        />
      </form>
    </>
  );
};

export default ContactForm;