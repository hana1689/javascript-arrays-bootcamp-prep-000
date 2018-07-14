var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, element)
{
  array = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}