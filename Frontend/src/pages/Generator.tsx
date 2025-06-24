// File: src/pages/Generator.tsx

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { EmailForm } from "@/components/EmailForm";
import { EmailPreview } from "@/components/EmailPreview";
import { HistoryPanel } from "@/components/HistoryPanel";
import { OnboardingTips } from "@/components/OnboardingTips";
import { Footer } from "@/components/Footer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import axios from "axios";
import {
  setCurrentEmail,
  setIsGenerating,
  addSavedEmail,
  toggleFavorite,
  deleteEmail,
  toggleDarkMode,
  GeneratedEmail,
} from "@/store/slices/emailSlice";
import { toast } from "sonner";

const Generator = () => {
  const dispatch = useAppDispatch();
  const { currentEmail, savedEmails, isGenerating, isDarkMode } =
    useAppSelector((state) => state.email);

  const handleGenerateEmail = async (formData: any) => {
    try {
      dispatch(setIsGenerating(true));

      const response = await axios.post(
        "https://flaremail.onrender.com/api/coldemail/generate-email",
        {
          targetAudience: formData.targetAudience,
          productService: formData.productService,
          tone: formData.tone,
          cta: formData.cta,
          keywords: formData.keywords || "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { subject, email } = response.data;

      const newEmail: GeneratedEmail = {
        id: Date.now().toString(),
        subject,
        content: email,
        targetAudience: formData.targetAudience,
        productService: formData.productService,
        tone: formData.tone,
        cta: formData.cta,
        timestamp: new Date(),
        isFavorite: false,
      };

      dispatch(setCurrentEmail(newEmail));
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error?.message ||
        "Something went wrong while generating the email.";

      // Optional: toast UI notification
      toast.error(message);

      // Better logging
      console.error("Failed to generate email:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
    } finally {
      dispatch(setIsGenerating(false));
    }
  };

  const handleSaveEmail = (email: GeneratedEmail) => {
    dispatch(addSavedEmail(email));
  };

  const handleToggleFavorite = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const handleDeleteEmail = (id: string) => {
    dispatch(deleteEmail(id));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <OnboardingTips />
            <EmailForm
              onGenerate={handleGenerateEmail}
              isGenerating={isGenerating}
            />
            <EmailPreview
              email={currentEmail}
              onSave={handleSaveEmail}
              onRegenerate={() => handleGenerateEmail(currentEmail)}
            />
          </div>

          <div className="lg:col-span-1">
            <HistoryPanel
              emails={savedEmails}
              onToggleFavorite={handleToggleFavorite}
              onDelete={handleDeleteEmail}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Generator;
