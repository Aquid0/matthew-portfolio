import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const paths = document.querySelectorAll('svg path');
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      const delay = index * 0.025;

      if (path.classList.contains('letter')) {
        path.style.animation = `drawStroke 3s ease forwards ${delay}s, fillIn 3s ease forwards ${delay + 0.25}s`;
      } else {
        path.style.animation = `drawStroke 3s ease forwards ${delay}s`;
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center about-section ml-25 mt-15">
      <svg
        width="802"
        height="258"
        viewBox="0 0 802 258"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="letter"
          d="M752.1 81.5574H747V79.0574H752.1V81.5574Z"
          fill="black"
        />
        <path
          className="letter"
          d="M755.7 71.6797C752.8 71.1797 750.5 69.9797 748.75 68.0797C747 66.1297 746.15 63.6797 746.15 60.7297C746.15 57.1797 747.35 54.3297 749.8 52.2297C752.2 50.1297 755.45 49.0797 759.55 49.0797C763.6 49.0797 766.9 50.1297 769.45 52.2797C772 54.4297 773.3 57.2297 773.3 60.7297C773.3 64.3297 772 67.0797 769.5 69.0297C766.95 70.9297 763.8 71.9297 760.1 71.9297H759.4V51.1797C756.15 51.1797 753.4 51.9797 751.2 53.5797C748.95 55.1797 747.85 57.5797 747.85 60.7797C747.85 63.0797 748.5 65.0297 749.9 66.5797C751.25 68.1297 753.2 69.1797 755.7 69.6797V71.6797ZM761.15 69.8797C763.95 69.8797 766.4 69.0797 768.45 67.4797C770.45 65.8797 771.5 63.6297 771.5 60.7297C771.5 57.7797 770.5 55.5297 768.6 53.9797C766.65 52.3797 764.15 51.4797 761.15 51.1797V69.8797Z"
          fill="black"
        />
        <path
          className="letter"
          d="M782.6 44.3H746.95V42.2H773.6C775.9 42.2 778.25 42.3 780.55 42.5C780.1 42.3 779.4 42 778.45 41.7C777.5 41.35 776.8 41.1 776.35 40.9L746.95 28.35V26.25L776 13.65C776.15 13.55 777.65 13 780.5 12C776.65 12.15 774.35 12.25 773.6 12.25H746.95V10.15H782.55V13.15L756.15 24.5L749.2 27.3C750.9 27.9 753 28.7 755.45 29.8C768.3 35.25 777.35 39.1 782.6 41.35V44.3Z"
          fill="black"
        />
        <path
          className="letter"
          d="M91.6794 12.48V40H89.9994V15.44C88.8394 16.6 87.7194 17.44 86.6394 17.92C85.5994 18.44 84.2394 18.8 82.6394 18.96V17.6C84.4794 17.2 85.9194 16.68 86.9594 16C87.9994 15.32 89.0794 14.16 90.2394 12.48H91.6794Z"
          fill="black"
        />
        <path
          className="letter"
          d="M67.2528 12C68.7728 12 70.1328 12.32 71.3328 12.88C72.5328 13.48 73.4928 14.24 74.2128 15.16C74.9328 16.12 75.5328 17.2 76.0128 18.48C76.4928 19.76 76.8128 21.04 76.9728 22.32C77.1328 23.6 77.2528 24.92 77.2528 26.32C77.2528 28.08 77.0928 29.76 76.7728 31.32C76.4528 32.88 75.9728 34.4 75.2528 35.88C74.5328 37.32 73.4528 38.48 72.0928 39.36C70.7328 40.2 69.0928 40.64 67.1728 40.64C63.9728 40.64 61.4928 39.44 59.8128 37.04C58.0928 34.64 57.2528 31.24 57.2528 26.76C57.2528 24.96 57.3728 23.28 57.6928 21.68C58.0128 20.08 58.4928 18.52 59.2128 17C59.8928 15.48 60.9328 14.28 62.2928 13.36C63.6528 12.48 65.3328 12 67.2528 12ZM67.2528 13.52C64.6128 13.52 62.5328 14.72 61.0928 17.04C59.6128 19.36 58.8928 22.64 58.8928 26.84C58.8928 28 58.9328 29.12 59.0928 30.2C59.2128 31.24 59.4528 32.36 59.8528 33.48C60.2128 34.6 60.6928 35.6 61.2928 36.4C61.8928 37.2 62.6928 37.88 63.6928 38.4C64.6928 38.92 65.8528 39.16 67.1728 39.16C68.7728 39.16 70.1728 38.76 71.3728 37.96C72.5328 37.16 73.4128 36.12 73.9728 34.76C74.5328 33.4 74.9728 32.04 75.2128 30.68C75.4528 29.32 75.5728 27.84 75.5728 26.32C75.5728 24.8 75.4528 23.36 75.2128 22C74.9728 20.64 74.5728 19.32 74.0128 17.96C73.4528 16.6 72.5728 15.52 71.4128 14.72C70.2528 13.92 68.8528 13.52 67.2528 13.52Z"
          fill="black"
        />
        <path
          className="letter"
          d="M51.56 35.92V40H49.56V35.92H51.56Z"
          fill="black"
        />
        <path
          d="M801.456 183.776L801.192 185H800.592L800.856 183.776H801.456Z"
          fill="black"
        />
        <path
          d="M791.257 176.456H794.161C794.545 176.456 794.893 176.492 795.193 176.54C795.493 176.6 795.781 176.696 796.057 176.84C796.333 176.984 796.549 177.188 796.693 177.476C796.837 177.764 796.921 178.112 796.921 178.532C796.921 179.216 796.693 179.78 796.261 180.224C795.817 180.668 795.241 180.908 794.521 180.944C794.989 181.028 795.313 181.208 795.493 181.484C795.673 181.76 795.769 182.144 795.769 182.636C795.769 182.804 795.757 183.056 795.733 183.38C795.709 183.716 795.709 183.956 795.709 184.124C795.709 184.46 795.745 184.76 795.829 185H795.289C795.217 184.76 795.193 184.472 795.193 184.148C795.193 183.968 795.193 183.692 795.217 183.308C795.241 182.936 795.253 182.696 795.253 182.6C795.253 182.264 795.205 182 795.109 181.784C795.013 181.58 794.869 181.436 794.653 181.34C794.437 181.244 794.233 181.184 794.017 181.16C793.801 181.136 793.525 181.112 793.165 181.112H790.801L789.973 185H789.445L791.257 176.456ZM791.677 176.924L790.885 180.668H793.417C794.005 180.668 794.461 180.632 794.797 180.56C795.133 180.488 795.409 180.368 795.649 180.176C795.877 180.008 796.057 179.768 796.201 179.48C796.333 179.192 796.405 178.892 796.405 178.58C796.405 178.304 796.357 178.064 796.273 177.86C796.189 177.668 796.081 177.5 795.937 177.38C795.793 177.26 795.625 177.176 795.421 177.104C795.205 177.032 795.001 176.984 794.797 176.96C794.581 176.936 794.341 176.924 794.077 176.924H791.677Z"
          fill="black"
        />
        <path
          d="M787.157 176.456L787.061 176.912H781.997L781.277 180.344H786.005L785.909 180.788H781.181L780.389 184.544H785.609L785.513 185H779.765L781.577 176.456H787.157Z"
          fill="black"
        />
        <path
          d="M777.758 176.456L772.766 185H772.13L770.702 176.456H771.242L772.274 182.828C772.31 183.044 772.358 183.356 772.418 183.764C772.466 184.172 772.502 184.436 772.526 184.544C772.718 184.16 773.03 183.62 773.438 182.9L777.182 176.456H777.758Z"
          fill="black"
        />
        <path
          d="M766.536 179.756C766.536 180.452 766.428 181.124 766.236 181.772C766.032 182.42 765.744 182.996 765.372 183.512C764.988 184.028 764.508 184.436 763.92 184.748C763.32 185.06 762.672 185.204 761.952 185.204C760.884 185.204 760.044 184.88 759.42 184.232C758.796 183.584 758.484 182.696 758.484 181.58C758.484 180.644 758.652 179.768 759 178.976C759.348 178.184 759.876 177.524 760.596 177.02C761.304 176.516 762.132 176.252 763.092 176.252C764.136 176.252 764.976 176.576 765.6 177.212C766.224 177.848 766.536 178.7 766.536 179.756ZM763.032 176.708C762.384 176.708 761.808 176.852 761.28 177.128C760.752 177.416 760.332 177.788 760.008 178.244C759.684 178.712 759.432 179.228 759.264 179.804C759.084 180.38 759 180.98 759 181.58C759 182.552 759.264 183.32 759.804 183.896C760.344 184.472 761.064 184.76 761.976 184.76C762.48 184.76 762.948 184.664 763.392 184.472C763.824 184.28 764.208 184.028 764.52 183.704C764.832 183.38 765.108 183.008 765.336 182.576C765.564 182.156 765.732 181.712 765.852 181.244C765.96 180.776 766.02 180.308 766.02 179.84C766.02 178.892 765.756 178.136 765.228 177.56C764.7 176.996 763.968 176.708 763.032 176.708Z"
          fill="black"
        />
        <path
          d="M755.148 176.456L753.348 185H752.82L753.72 180.764H748.38L747.468 185H746.952L748.764 176.456H749.292L748.476 180.32H753.816L754.632 176.456H755.148Z"
          fill="black"
        />
        <path
          d="M801.456 195.776L801.192 197H800.592L800.856 195.776H801.456Z"
          fill="black"
        />
        <path
          d="M791.257 188.456H794.161C794.545 188.456 794.893 188.492 795.193 188.54C795.493 188.6 795.781 188.696 796.057 188.84C796.333 188.984 796.549 189.188 796.693 189.476C796.837 189.764 796.921 190.112 796.921 190.532C796.921 191.216 796.693 191.78 796.261 192.224C795.817 192.668 795.241 192.908 794.521 192.944C794.989 193.028 795.313 193.208 795.493 193.484C795.673 193.76 795.769 194.144 795.769 194.636C795.769 194.804 795.757 195.056 795.733 195.38C795.709 195.716 795.709 195.956 795.709 196.124C795.709 196.46 795.745 196.76 795.829 197H795.289C795.217 196.76 795.193 196.472 795.193 196.148C795.193 195.968 795.193 195.692 795.217 195.308C795.241 194.936 795.253 194.696 795.253 194.6C795.253 194.264 795.205 194 795.109 193.784C795.013 193.58 794.869 193.436 794.653 193.34C794.437 193.244 794.233 193.184 794.017 193.16C793.801 193.136 793.525 193.112 793.165 193.112H790.801L789.973 197H789.445L791.257 188.456ZM791.677 188.924L790.885 192.668H793.417C794.005 192.668 794.461 192.632 794.797 192.56C795.133 192.488 795.409 192.368 795.649 192.176C795.877 192.008 796.057 191.768 796.201 191.48C796.333 191.192 796.405 190.892 796.405 190.58C796.405 190.304 796.357 190.064 796.273 189.86C796.189 189.668 796.081 189.5 795.937 189.38C795.793 189.26 795.625 189.176 795.421 189.104C795.205 189.032 795.001 188.984 794.797 188.96C794.581 188.936 794.341 188.924 794.077 188.924H791.677Z"
          fill="black"
        />
        <path
          d="M787.157 188.456L787.061 188.912H781.997L781.277 192.344H786.005L785.909 192.788H781.181L780.389 196.544H785.609L785.513 197H779.765L781.577 188.456H787.157Z"
          fill="black"
        />
        <path
          d="M777.758 188.456L772.766 197H772.13L770.702 188.456H771.242L772.274 194.828C772.31 195.044 772.358 195.356 772.418 195.764C772.466 196.172 772.502 196.436 772.526 196.544C772.718 196.16 773.03 195.62 773.438 194.9L777.182 188.456H777.758Z"
          fill="black"
        />
        <path
          d="M766.536 191.756C766.536 192.452 766.428 193.124 766.236 193.772C766.032 194.42 765.744 194.996 765.372 195.512C764.988 196.028 764.508 196.436 763.92 196.748C763.32 197.06 762.672 197.204 761.952 197.204C760.884 197.204 760.044 196.88 759.42 196.232C758.796 195.584 758.484 194.696 758.484 193.58C758.484 192.644 758.652 191.768 759 190.976C759.348 190.184 759.876 189.524 760.596 189.02C761.304 188.516 762.132 188.252 763.092 188.252C764.136 188.252 764.976 188.576 765.6 189.212C766.224 189.848 766.536 190.7 766.536 191.756ZM763.032 188.708C762.384 188.708 761.808 188.852 761.28 189.128C760.752 189.416 760.332 189.788 760.008 190.244C759.684 190.712 759.432 191.228 759.264 191.804C759.084 192.38 759 192.98 759 193.58C759 194.552 759.264 195.32 759.804 195.896C760.344 196.472 761.064 196.76 761.976 196.76C762.48 196.76 762.948 196.664 763.392 196.472C763.824 196.28 764.208 196.028 764.52 195.704C764.832 195.38 765.108 195.008 765.336 194.576C765.564 194.156 765.732 193.712 765.852 193.244C765.96 192.776 766.02 192.308 766.02 191.84C766.02 190.892 765.756 190.136 765.228 189.56C764.7 188.996 763.968 188.708 763.032 188.708Z"
          fill="black"
        />
        <path
          d="M755.148 188.456L753.348 197H752.82L753.72 192.764H748.38L747.468 197H746.952L748.764 188.456H749.292L748.476 192.32H753.816L754.632 188.456H755.148Z"
          fill="black"
        />
        <path
          d="M801.456 207.776L801.192 209H800.592L800.856 207.776H801.456Z"
          fill="black"
        />
        <path
          d="M791.257 200.456H794.161C794.545 200.456 794.893 200.492 795.193 200.54C795.493 200.6 795.781 200.696 796.057 200.84C796.333 200.984 796.549 201.188 796.693 201.476C796.837 201.764 796.921 202.112 796.921 202.532C796.921 203.216 796.693 203.78 796.261 204.224C795.817 204.668 795.241 204.908 794.521 204.944C794.989 205.028 795.313 205.208 795.493 205.484C795.673 205.76 795.769 206.144 795.769 206.636C795.769 206.804 795.757 207.056 795.733 207.38C795.709 207.716 795.709 207.956 795.709 208.124C795.709 208.46 795.745 208.76 795.829 209H795.289C795.217 208.76 795.193 208.472 795.193 208.148C795.193 207.968 795.193 207.692 795.217 207.308C795.241 206.936 795.253 206.696 795.253 206.6C795.253 206.264 795.205 206 795.109 205.784C795.013 205.58 794.869 205.436 794.653 205.34C794.437 205.244 794.233 205.184 794.017 205.16C793.801 205.136 793.525 205.112 793.165 205.112H790.801L789.973 209H789.445L791.257 200.456ZM791.677 200.924L790.885 204.668H793.417C794.005 204.668 794.461 204.632 794.797 204.56C795.133 204.488 795.409 204.368 795.649 204.176C795.877 204.008 796.057 203.768 796.201 203.48C796.333 203.192 796.405 202.892 796.405 202.58C796.405 202.304 796.357 202.064 796.273 201.86C796.189 201.668 796.081 201.5 795.937 201.38C795.793 201.26 795.625 201.176 795.421 201.104C795.205 201.032 795.001 200.984 794.797 200.96C794.581 200.936 794.341 200.924 794.077 200.924H791.677Z"
          fill="black"
        />
        <path
          d="M787.157 200.456L787.061 200.912H781.997L781.277 204.344H786.005L785.909 204.788H781.181L780.389 208.544H785.609L785.513 209H779.765L781.577 200.456H787.157Z"
          fill="black"
        />
        <path
          d="M777.758 200.456L772.766 209H772.13L770.702 200.456H771.242L772.274 206.828C772.31 207.044 772.358 207.356 772.418 207.764C772.466 208.172 772.502 208.436 772.526 208.544C772.718 208.16 773.03 207.62 773.438 206.9L777.182 200.456H777.758Z"
          fill="black"
        />
        <path
          d="M766.536 203.756C766.536 204.452 766.428 205.124 766.236 205.772C766.032 206.42 765.744 206.996 765.372 207.512C764.988 208.028 764.508 208.436 763.92 208.748C763.32 209.06 762.672 209.204 761.952 209.204C760.884 209.204 760.044 208.88 759.42 208.232C758.796 207.584 758.484 206.696 758.484 205.58C758.484 204.644 758.652 203.768 759 202.976C759.348 202.184 759.876 201.524 760.596 201.02C761.304 200.516 762.132 200.252 763.092 200.252C764.136 200.252 764.976 200.576 765.6 201.212C766.224 201.848 766.536 202.7 766.536 203.756ZM763.032 200.708C762.384 200.708 761.808 200.852 761.28 201.128C760.752 201.416 760.332 201.788 760.008 202.244C759.684 202.712 759.432 203.228 759.264 203.804C759.084 204.38 759 204.98 759 205.58C759 206.552 759.264 207.32 759.804 207.896C760.344 208.472 761.064 208.76 761.976 208.76C762.48 208.76 762.948 208.664 763.392 208.472C763.824 208.28 764.208 208.028 764.52 207.704C764.832 207.38 765.108 207.008 765.336 206.576C765.564 206.156 765.732 205.712 765.852 205.244C765.96 204.776 766.02 204.308 766.02 203.84C766.02 202.892 765.756 202.136 765.228 201.56C764.7 200.996 763.968 200.708 763.032 200.708Z"
          fill="black"
        />
        <path
          d="M755.148 200.456L753.348 209H752.82L753.72 204.764H748.38L747.468 209H746.952L748.764 200.456H749.292L748.476 204.32H753.816L754.632 200.456H755.148Z"
          fill="black"
        />
        <path d="M0 44V43H101V44H0Z" fill="black" />
        <path d="M24 53V52H101V53H24Z" fill="black" />
        <path
          className="letter"
          d="M280.412 227.234H235.097L261.782 257.234H307.097L280.412 227.234Z"
          fill="black"
        />
        <path
          className="letter"
          d="M335.315 227H290L316.685 257H362L335.315 227Z"
          fill="black"
        />
        <path
          className="letter"
          d="M224.315 227H179L205.685 257H251L224.315 227Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M726 8H110C105.029 8 101 12.0294 101 17V217C101 221.971 105.029 226 110 226H726C730.971 226 735 221.971 735 217V17C735 12.0294 730.971 8 726 8ZM110 7C104.477 7 100 11.4772 100 17V217C100 222.523 104.477 227 110 227H726C731.523 227 736 222.523 736 217V17C736 11.4772 731.523 7 726 7H110Z"
          fill="black"
        />
        <path
          className="letter"
          d="M615.1 83.32L614.96 86.12H599.14V137.92C599.14 140.16 599.28 141.7 599.28 142.54C599.28 143.38 599.42 144.5 599.7 146.18C599.98 147.86 600.54 148.98 601.1 149.68C601.8 150.38 602.78 151.08 604.18 151.64C605.58 152.2 607.12 152.62 609.08 152.62C610.76 152.62 612.72 152.34 614.96 152.06V154.86C612.72 155.14 610.76 155.42 609.22 155.42C606.14 155.42 603.76 155 601.8 154.16C599.98 153.32 598.72 151.92 597.88 149.96C597.18 148 596.76 146.32 596.62 144.64C596.34 142.96 596.34 140.58 596.34 137.5V85.98H582.9V83.32H596.34V60.78H599.28V83.32H615.1Z"
          fill="black"
        />
        <path
          className="letter"
          d="M561.2 83.32V155H558.4V138.06C553.36 150.94 544.82 157.24 532.5 157.24C524.24 157.24 517.8 154.72 513.32 149.68C508.84 144.64 506.6 137.78 506.6 129.38V83.32H509.54V126.44C509.54 131.2 509.68 134.7 509.96 136.94C510.24 139.18 511.08 141.28 512.34 143.52C514.02 147.02 516.82 149.82 520.46 151.78C524.1 153.74 528.16 154.72 532.64 154.72C540.62 154.72 546.92 151.78 551.4 145.76C555.88 139.74 558.26 132.6 558.26 124.34V83.32H561.2Z"
          fill="black"
        />
        <path
          className="letter"
          d="M449.403 81.5C459.063 81.5 466.763 85 472.643 92C478.383 99 481.323 108.24 481.323 119.86C481.323 131.34 478.383 140.3 472.503 147.02C466.623 153.74 458.783 157.1 448.983 157.1C439.183 157.1 431.343 153.74 425.463 146.88C419.583 140.02 416.783 130.78 416.783 119.3C416.783 107.96 419.723 98.86 425.743 91.86C431.623 85 439.603 81.5 449.403 81.5ZM449.263 84.16C440.303 84.16 433.163 87.38 427.703 93.82C422.243 100.26 419.583 108.8 419.583 119.16C419.583 129.94 422.243 138.48 427.563 144.92C432.883 151.36 440.163 154.44 449.123 154.44C457.943 154.44 465.083 151.36 470.403 145.06C475.723 138.9 478.383 130.5 478.383 119.86C478.383 109.08 475.723 100.4 470.403 93.96C465.083 87.52 458.083 84.16 449.263 84.16Z"
          fill="black"
        />
        <path
          className="letter"
          d="M334.167 55.32V103.76C336.127 96.76 339.487 91.3 344.387 87.24C349.147 83.32 355.307 81.22 362.867 81.22C372.387 81.22 379.947 84.72 385.547 91.44C391.147 98.3 393.947 107.54 393.947 119.16C393.947 131.06 391.147 140.44 385.547 147.16C379.947 154.02 372.387 157.38 362.867 157.38C348.167 157.38 338.647 149.96 334.167 134.84V155H331.367V55.32H334.167ZM362.307 83.88C353.907 83.88 347.047 87.1 341.867 93.54C336.687 99.98 334.167 108.52 334.167 119.02C334.167 129.94 336.687 138.62 342.007 145.2C347.327 151.78 354.187 155 362.867 155C371.547 155 378.407 151.92 383.447 145.48C388.487 139.04 391.007 130.36 391.007 119.44C391.007 108.24 388.487 99.56 383.447 93.26C378.407 87.1 371.267 83.88 362.307 83.88Z"
          fill="black"
        />
        <path
          className="letter"
          d="M271 55.32L311.04 155H307.82L294.66 122.1H243.98L230.54 155H227.32L268.34 55.32H271ZM293.68 119.44L269.6 58.4L244.96 119.44H293.68Z"
          fill="black"
        />
        <path d="M100 160V159H658V160H100Z" fill="black" />
        <path d="M100 170V169H707V170H100Z" fill="black" />
      </svg>
    </div>
  );
};

export default About;
