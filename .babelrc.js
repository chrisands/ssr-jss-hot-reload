module.exports = ({
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ],
})