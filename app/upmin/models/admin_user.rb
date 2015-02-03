class AdminProduct < Upmin::Model
   # The attributes method overwrites default attributes shown for a model, and replaces them with the provided attributes. These don't all need to be editable, but as long as there is an :attr_name= method available upmin assumes that the attribute should be editable.
  attributes :first_name, :last_name

  # The items_per_page method overrides the number of items shown for a model from the default of 30.
  # (The global default can also be modified in the upmin config initializer.)
  items_per_page 15

end
