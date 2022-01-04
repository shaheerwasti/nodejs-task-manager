const notFound = (req,res) =>{
    res.status(404).send('Rountes does not exsist')
}

module.exports = notFound