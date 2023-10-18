
export default function InputComponent({
  label,
  inputType,
  type,
  width,
  required,
  name,
  formik,
  onChange
}) {
  return (
    <>
      <label>{label}</label>
      {required && <b className="text-red-500">*</b>}
      {inputType === "textArea" ? (
        <div>
          <textarea
            rows={6}
            className={`border-solid rounded-[4px] p-2 border-[1px] border-gray-300 w-100 `}
            name={name}
            value={formik?.values?.[name]}
            onChange={(e)=>onChange(e,formik.setFieldValue)}
          />
          <span className="text-red-500 text-[14px]">{formik.errors[name]}</span>
        </div>
      ) : (
        <div>
          <input
            className={`border-solid rounded-[4px] p-2 border-[1px] border-gray-300 w-100`}
            name={name}
            value={formik.values?.[name]}
            type={type}
            onChange={(e)=>onChange(e,formik.setFieldValue)}
          />
          <span className="text-red-500 text-[14px]">{formik.errors[name]}</span>
        </div>
      )}
    </>
  );
}
