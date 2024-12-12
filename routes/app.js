const authRoutes = require('./routes/auth');
const authenticate = require('./middleware/authenticate');

app.use('/api/auth', authRoutes);

// Example of a protected route
// app.get('/api/protected', authenticate, (req, res) => {
//   res.send('This is a protected route');
//   });
//
