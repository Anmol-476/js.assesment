const nftCollection = [];
function mintNFT(name, rarity,qualities ) {
    const nft = {
        name: name,
        rarity: rarity,
        qualities: qualities,
    };
    nftCollection.push(nft);
}
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log('NFT #' + (index + 1));
        console.log('Name: ' + nft.name);
        console.log('Rarity: ' + nft.rarity);
        console.log('qualities: ' + nft.qualities);
        console.log('---------------------------');
    });
}
function getTotalSupply() {
    return nftCollection.length;
}
mintNFT('Lord Ganesha', 'Rare', 'God of Wisdom and Beginnings');
mintNFT('Lord Krishna', 'Legendary', 'God of Compassion and Love');
mintNFT('Goddess Lakshmi', 'Epic', 'Goddess of Wealth and Prosperity');
mintNFT('Lord Shiva', 'Legendary', 'God of Destruction, Transformation and father');
mintNFT('Goddess Parvati', 'Epic', 'Goddess of Devotion and mother');
listNFTs();
console.log('Total NFTs: '+getTotalSupply());
