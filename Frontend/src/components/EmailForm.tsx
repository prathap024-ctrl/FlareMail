import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Loader2, Plus, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { emailFormSchema, EmailFormSchema } from "@/schemas/emailSchema";

interface EmailFormProps {
  onGenerate: (formData: EmailFormSchema) => void;
  isGenerating: boolean;
}

export const EmailForm = ({ onGenerate, isGenerating }: EmailFormProps) => {
  const [keywordInput, setKeywordInput] = useState("");

  const form = useForm<EmailFormSchema>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      targetAudience: "",
      productService: "",
      tone: undefined,
      cta: "",
      keywords: [],
      emailLength: [],
    },
  });

  const targetAudiences = [
    "Marketing Managers",
    "Sales Directors",
    "CEOs/Founders",
    "HR Managers",
    "IT Directors",
    "Product Managers",
    "Small Business Owners",
    "E-commerce Managers",
  ];

  const tones = [
    {
      value: "Friendly" as const,
      label: "Friendly",
      description: "Casual and approachable",
    },
    {
      value: "Professional" as const,
      label: "Professional",
      description: "Formal and business-like",
    },
    {
      value: "Bold" as const,
      label: "Bold",
      description: "Confident and attention-grabbing",
    },
  ];

  const handleAddKeyword = () => {
    const currentKeywords = form.getValues("keywords") || [];
    if (keywordInput.trim() && !currentKeywords.includes(keywordInput.trim())) {
      form.setValue("keywords", [...currentKeywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    const currentKeywords = form.getValues("keywords") || [];
    form.setValue(
      "keywords",
      currentKeywords.filter((k) => k !== keyword)
    );
  };

  const onSubmit = (data: EmailFormSchema) => {
    onGenerate(data);
  };

  const watchedKeywords = form.watch("keywords");
  const watchedEmailLength = form.watch("emailLength");

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
      <CardHeader>
        <CardTitle className="text-2xl">Email Configuration</CardTitle>
        <CardDescription>
          Fill in the details below to generate your personalized cold email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your target audience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {targetAudiences.map((audience) => (
                          <SelectItem key={audience} value={audience}>
                            {audience}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="productService"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product/Service</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Marketing automation software"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Tone</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {tones.map((tone) => (
                      <div
                        key={tone.value}
                        className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-blue-300 dark:hover:border-blue-400 ${
                          field.value === tone.value
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-200 dark:ring-blue-400"
                            : "border-gray-200 dark:border-gray-600"
                        }`}
                        onClick={() => field.onChange(tone.value)}
                      >
                        <div className="font-medium">{tone.label}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {tone.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call-to-Action</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Schedule a 15-minute demo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Keywords (Optional)</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add relevant keywords"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(), handleAddKeyword())
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddKeyword}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {watchedKeywords && watchedKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {watchedKeywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {keyword}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => handleRemoveKeyword(keyword)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <FormField
              control={form.control}
              name="emailLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Length: {watchedEmailLength?.[0] || 150} words
                  </FormLabel>
                  <FormControl>
                    <Slider
                      value={field.value}
                      onValueChange={field.onChange}
                      max={250}
                      min={75}
                      step={25}
                      className="w-full"
                    />
                  </FormControl>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>Short (75)</span>
                    <span>Medium (150)</span>
                    <span>Long (250)</span>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-6 text-lg"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Email...
                </>
              ) : (
                "Generate Email"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
