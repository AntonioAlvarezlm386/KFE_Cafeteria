export const endpointNotFound = (req, res) => {
    res.status(404).json(
        {message: 'endpoint no encontrado'}
    )
}