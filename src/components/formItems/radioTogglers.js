export default function RadioTogglers({ options, defaultValue, onChange }) {
  return (
    <div role="tablist" className="tabs tabs-boxed flex gap-2 rounded-md justify-between">
      {options.map((option) => (
          <label key={option.value} className="rounded-md">
            <input
              type="radio"
              name="bgType"
              role="tab"
              className="tab min-w-16"
              onClick={(ev) => onChange(ev.target.value)}
              defaultChecked={defaultValue === option.value}
              value={option.value}
              aria-label={option.label}
            />
          </label>
      ))}
    </div>
  );
}