import DynamicForm from "@/components/dynamicForm"
import TestForm from "@/components/testForm"
import processSchema from "@/form-building/parseSchema"
import configJson from "../formConfig/testSchema.json"
const DForm = (): JSX.Element => {
  console.log(configJson)
  const {key,formElements,schema} = processSchema(configJson)

  return (
    <main >
      <div>
      <DynamicForm key={key} fields={formElements} schema={schema} />
      </div>
    </main>
  )
}

export default DForm