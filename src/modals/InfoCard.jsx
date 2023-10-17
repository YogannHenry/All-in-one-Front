import React from 'react';

const InfoCard = ({ iconName, title, content }) => {

  const createDynamicIconComponent = (iconName) => {
    const DynamicIconComponent = iconName; 
    if (DynamicIconComponent) {
      return <DynamicIconComponent />;
    } else {
      return <div>Icône introuvable pour le nom : {iconName}</div>;
    }
  };

  return (
    <div className="border rounded-xl border-slate-400 bg-white py-6 px-7.5 shadow-default w-[320px] m-2">
      <div className="flex justify-center text-white">
        <div className="w-min bg-gradient-to-t from-gray-400 via-[var(--color-primary-500)] to-[var(--color-primary-300)] rounded-full p-2">
          {/* Utilisez la fonction createDynamicIconComponent pour afficher l'icône dynamique */}
          <div className="h-11 w-11 text-white text-[var(--color-primary-500)]">
            {createDynamicIconComponent(iconName)}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="pl-4">
          <h4 className="font-bold text-black sm:text-lg">
            {title}
          </h4>
          <span className="text-sm font-medium">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
