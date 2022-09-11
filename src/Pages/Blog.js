function Leaving (){
    return (
        <div className="Leaving-Container">
            <div>
            <input type="text" name="name" />
            <input type="text" name="name" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
  <StaticDatePicker
    displayStaticWrapperAs="desktop"
    openTo="year"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
            <input type="text" name="name" />
            </div>
        </div>
    )
}
export default Leaving;