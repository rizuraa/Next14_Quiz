import { RegisterForm } from "@/components/shared/RegisterForm";

export default function Register() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain min-h-screen flex items-center py-5 md:py-10">
        <RegisterForm />
      </section>
    </>
  );
}
