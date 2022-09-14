const validate = (schema) => async (req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  try {
    await schema.validate(req.body)
    next()   
  } catch(err) {
    res.status(409).json({ 
      success: false, 
      message: `Encountered an error - ${err.message}` 
    })
  }
}

export default validate