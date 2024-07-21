import { CalendarExample } from "@/components/calendar-example";
import { CalendarForm } from "@/components/calendar-form";

export default function Home() {
  return (
    <main className="container py-16">
      {/* <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        consequuntur quos placeat assumenda facilis in commodi temporibus eos
        illo eaque eius impedit possimus, voluptatum repudiandae, illum dolores
        distinctio, sunt consequatur.
      </p>*/}
      <CalendarForm />
      <CalendarExample />
    </main>
  );
}
